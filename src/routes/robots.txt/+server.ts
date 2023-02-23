export const prerender = true

export async function GET() {
	return new Response(`User-agent: * \nSitemap: https://www.yesvelte.com/sitemap.xml`.trim(), {
		headers: {
			'Content-Type': 'text/plain',
		},
	})
}
