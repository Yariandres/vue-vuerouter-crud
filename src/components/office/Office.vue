<template>
	<b-container>
		<div class="mt-5">
			<b-jumbotron header="Dashboard" class="text-center"> </b-jumbotron>
		</div>

		<div class="d-flex justify-content-center card p-5">
			<b-form @submit="onSubmit" @reset="onReset" v-if="show">
				<b-form-group
					id="input-group-1"
					label="Event title:"
					label-for="input-1"
					description="Discribe your event..."
				>
					<b-form-input
						id="input-1"
						v-model="form.title"
						type="text"
						placeholder="Enter title"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="input-group-2"
					label="Description:"
					label-for="input-2"
				>
					<b-form-input
						id="input-2"
						type="text"
						v-model="form.desc"
						placeholder="Event description..."
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="input-group-3"
					label="Price:"
					label-for="input-3"
				>
					<b-form-input
						id="input-3"
						type="number"
						v-model="form.price"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
					<b-form-checkbox-group
						v-model="form.checked"
						id="checkboxes-4"
						:aria-describedby="ariaDescribedby"
					>
					</b-form-checkbox-group>
				</b-form-group>

				<b-button type="submit" variant="primary">Submit</b-button>
				<b-button type="reset" variant="danger">Reset</b-button>
			</b-form>
		</div>
	</b-container>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Office',
		props: ['eventId'],
		data() {
			return {
				form: {
					title: '',
					desc: '',
					price: null,
					id: '',
				},

				show: true,
			};
		},

		methods: {
			onSubmit(event) {
				event.preventDefault();

				if (this.eventId) {
					axios
						.put('http://localhost:3000/events/' + this.eventId, {
							id: Math.floor(Math.random() * Math.floor(10000)),
							image: `https://picsum.photos/600/300/?image=${Math.floor(
								Math.random() * Math.floor(20),
							)}`,
							title: this.form.title,
							description: this.form.desc,
							price: this.form.price,
						})
						.then(() => this.$router.push('/'))
						.catch(err => console.log(err));
				} else {
					axios
						.post('http://localhost:3000/events', {
							id: Math.floor(Math.random() * Math.floor(10000)),
							image: `https://picsum.photos/600/300/?image=${Math.floor(
								Math.random() * Math.floor(20),
							)}`,
							title: this.form.title,
							description: this.form.desc,
							price: this.form.price,
						})
						.then(() => this.$router.push('/'))
						.catch(err => console.log(err));
				}
			},
			onReset(event) {
				event.preventDefault();
				this.form.title = '';
				this.form.desc = '';
				this.form.price = null;
			},
		},

		mounted() {
			if (this.eventId) {
				axios
					.get('http://localhost:3000/events/' + this.eventId)
					.then(response => {
						this.form.title = response.data.title;
						this.form.desc = response.data.description;
						this.form.price = response.data.price;
					})
					.catch(err => console.log(err));
			}
		},
	};
</script>
