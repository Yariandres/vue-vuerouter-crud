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
	export default {
		data() {
			return {
				form: {
					title: '',
					desc: '',
					price: null,
				},

				show: true,
			};
		},
		methods: {
			onSubmit(event) {
				event.preventDefault();
				alert(JSON.stringify(this.form));
			},
			onReset(event) {
				event.preventDefault();
				// Reset our form values
				this.form.email = '';
				this.form.name = '';
				this.form.food = null;
				this.form.checked = [];
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
			},
		},
	};
</script>
