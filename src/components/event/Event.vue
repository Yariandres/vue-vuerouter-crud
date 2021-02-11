<template>
	<b-container>
		<b-jumbotron header="Event Details" class="text-center"> </b-jumbotron>

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
								:to="{ name: 'Office', params: { eventId } }"
								variant="primary"
								class="text-center btn btn-info btn-sm"
								>Edit event</router-link
							>

							<b-button
								variant="danger"
								class="btn-sm ml-3"
								@click="deleteEvent"
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
				eventId: this.$route.params.eventId,
			};
		},

		created() {
			let id = this.$route.params.eventId;

			axios
				.get('http://localhost:3000/events/' + id)
				.then(response => (this.event = response.data))
				.catch(err => console.log(err));
		},

		methods: {
			deleteEvent() {
				let id = this.$route.params.eventId;
				axios
					.delete('http://localhost:3000/events/' + id)
					.then(() => {
						this.$router.push('/');
					})
					.catch(error => console.log(error));
			},
		},
	};
</script>
