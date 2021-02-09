<template>
	<b-container>
		<div class="mt-5">
			<b-jumbotron header="Event Details" class="text-center">
			</b-jumbotron>
		</div>

		<div class="d-flex justify-content-center">
			<b-card no-body class="overflow-hidden" style="max-width: 540px;">
				<b-row no-gutters>
					<b-card-img
						:src="event.image"
						:alt="event.title"
						class="rounded-0"
					></b-card-img>

					<b-col>
						<b-card-body title="Horizontal Card">
							<b-card-text>
								{{ event.description }}
							</b-card-text>

							<router-link
								to="/office"
								variant="primary"
								class="text-center btn btn-info btn-sm"
								>Edit event</router-link
							>

							<b-button variant="danger" class="btn-sm ml-3"
								>Delete</b-button
							>
						</b-card-body>

						<b-list-group flush>
							<b-list-group-item
								><span class="font-weight-bold">Price:</span> $
								{{ event.price }}
							</b-list-group-item>
						</b-list-group>
					</b-col>
				</b-row>
			</b-card>
		</div>
	</b-container>
</template>
<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				event: [],
			};
		},

		created() {
			let id = this.$route.params.eventId;

			let config = {
				headers: {
					'Accept': 'application/json',
				},
			};
			axios
				.get('http://localhost:3000/events/' + id, config)
				.then(response => (this.event = response.data))
				.then(() => console.log(this.event))
				.catch(err => console.log(err));
		},
	};
</script>
