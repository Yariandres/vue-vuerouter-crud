<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<router-link to="/" class="navbar-brand">Eventify</router-link>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<router-link
						to="/"
						activeClass="active"
						class="mr-4"
						tag="li"
						><a>Home</a></router-link
					>
					<!-- <router-link
						to="/event"
						activeClass="active"
						class="mr-4"
						tag="li"
						><a>Event</a></router-link -->
					>
					<router-link to="/office" activeClass="active" tag="li"
						><a>Office</a></router-link
					>
					<!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-form-input
							size="sm"
							class="mr-sm-2"
							placeholder="Search event"
						></b-form-input>
						<b-button size="sm" class="my-2 my-sm-0" type="button"
							>Search</b-button
						>
					</b-nav-form>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>
