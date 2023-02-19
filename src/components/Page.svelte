<script lang="ts">
	import { Card, CardBody, El } from 'yesvelte'
	import ToC from './ToC.svelte'

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
			<Card title="Menu">Menu will come here!</Card>
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
