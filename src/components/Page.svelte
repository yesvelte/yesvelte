<script lang="ts">
	import { Card, CardBody, El, Icon } from 'yesvelte'
	import ToC from './ToC.svelte'
	import { navigations } from '../routes/docs/navigations'

	export let title: string = ''
	export let description: string = ''
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<El container="lg">
	<El row>
		<El colMd="2" d="none" dMd="inline-block">
			<ul class="nav nav-pills nav-vertical" id="docs">
				{#each navigations as navigation}
					<li class="nav-item">
						<a
							href={navigation.route ? navigation.route : `#${navigation.id}`}
							class="nav-link"
							data-bs-toggle="collapse"
							aria-expanded="false">
							{navigation.title}
							{#if navigation.children}
								<span class="nav-link-toggle" />
							{/if}
						</a>
						{#if navigation.children}
							<ul class="nav nav-pills" data-bs-parent="#docs" id={navigation.id} style="">
								{#each navigation.children as menu}
									{@const [pack, icon] = (menu.icon ?? ':').split(':')}
									<li class="nav-item">
										<a href={menu.route} class="nav-link gap-2"
											><Icon {pack} name={icon} /> {menu.title}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</El>
		<El colMd="8" colSm="12">
			<Card size="lg">
				<CardBody>
					<El tag="h1">{title}</El>
					<slot name="description">
						<El tag="p">{description}</El>
					</slot>
					<slot />
				</CardBody>
			</Card>
		</El>
		<El colMd="2" d="none" dMd="inline-block">
			<ToC />
		</El>
	</El>
</El>
