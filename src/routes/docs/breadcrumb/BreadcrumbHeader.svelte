<script>
	import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, El, Icon } from 'yesvelte'
</script>

<El class="page-header">
	<El row mw="100" class="align-items-center mw-100">
		<El col>
			<El mb="1">
				<Breadcrumb>
					<BreadcrumbItem href="/">Home</BreadcrumbItem>
					<BreadcrumbItem href="/docs">Blog</BreadcrumbItem>
					<BreadcrumbItem active>First Post</BreadcrumbItem>
				</Breadcrumb>
			</El>
			<El tag="h2" class="page-title">
				<El tag="span">My First Blog Post</El>
			</El>
		</El>
		<El col="auto">
			<ButtonGroup>
				<Button d="none" dMd="inline-flex">
					<Icon name="edit" />
					Edit
				</Button>
				<Button color="primary">Publish</Button>
			</ButtonGroup>
		</El>
	</El>
</El>
