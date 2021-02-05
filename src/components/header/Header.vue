<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand href="#">Eventify</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="#">Home</b-nav-item>
					<b-nav-item href="#">Event</b-nav-item>
					<b-nav-item href="#">Back Office</b-nav-item>
					<!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-form-input
							size="sm"
							class="mr-sm-2"
							placeholder="Search event"
						></b-form-input>
						<b-button size="sm" class="my-2 my-sm-0" type="submit"
							>Search</b-button
						>
					</b-nav-form>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>
