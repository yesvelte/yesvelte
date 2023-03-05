<script>
	import { Avatar, AvatarList, Icon } from 'yesvelte'
</script>

<AvatarList stacked mb="3">
	<Avatar>
		<img src="https://preview.tabler.io/static/avatars/000m.jpg" alt="" />
	</Avatar>
	<Avatar>
		<Icon name="user" />
	</Avatar>
	<Avatar>
		<img src="https://preview.tabler.io/static/avatars/002f.jpg" alt="" />
	</Avatar>
	<Avatar>
		<Icon name="plus" />
	</Avatar>
</AvatarList>

<AvatarList stacked>
	<Avatar shape="circle">
		<img src="https://preview.tabler.io/static/avatars/000m.jpg" alt="" />
	</Avatar>
	<Avatar shape="circle">
		<Icon name="user" />
	</Avatar>
	<Avatar shape="circle">
		<img src="https://preview.tabler.io/static/avatars/002f.jpg" alt="" />
	</Avatar>
	<Avatar shape="circle">
		<Icon name="plus" />
	</Avatar>
</AvatarList>
