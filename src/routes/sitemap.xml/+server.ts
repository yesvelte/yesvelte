import { navigations, type Navigation } from '../docs/navigations'

export const prerender = true

let result = ''

function GetNodes(navs: Navigation[]) {
	navs.forEach((navigation) => {
		if (navigation.children && navigation.children.length > 0) {
			GetNodes(navigation.children)
		} else {
			result += `
          <url>
            <loc>${navigation.route}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
          </url>`
		}
	})

	return result
}

export async function GET() {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	}
	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
    <url>
        <loc>/docs</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>
      ${GetNodes(navigations)}
    </urlset>`.trim(),
		{
			headers,
		}
	)
}
