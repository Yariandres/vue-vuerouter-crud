<template>
	<b-container>
		<div class="mt-5">
			<b-jumbotron header="Nearby events" class="text-center">
			</b-jumbotron>
		</div>

		<b-row cols="3">
			<b-col v-for="event in events" v-bind:key="event.id">
				<b-card
					:title="event.title"
					:img-src="event.image"
					:img-alt="event.title"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2"
				>
					<b-card-text>
						{{ event.description }}
					</b-card-text>

					<router-link
						to="/event"
						variant="primary"
						class="btn btn-primary"
						>View event</router-link
					>
					<template #footer>
						<em>Pirce: ${{ event.price }}</em>
					</template>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				events: [],
			};
		},
		created() {
			let config = {
				headers: {
					'Accept': 'application/json',
				},
			};
			axios
				.get('http://localhost:3000/events', config)
				.then(response => (this.events = response.data))
				.then(() => console.log(this.events))
				.catch(err => console.log(err));
		},
	};
</script>
