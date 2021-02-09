<template>
	<b-container>
		<div class="mt-5">
			<b-jumbotron header="Nearby events" class="text-center">
			</b-jumbotron>
		</div>

		<b-row cols="3">
			<b-col>
				<b-card
					title="Card Title"
					img-src="https://picsum.photos/600/300/?image=25"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2"
				>
					<b-card-text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</b-card-text>

					<router-link
						to="/event"
						variant="primary"
						class="btn btn-primary"
						>View event</router-link
					>
					<template #footer>
						<em>Pirce: $10</em>
					</template>
				</b-card>
			</b-col>
			<b-col>
				<b-card
					title="Card Title"
					img-src="https://picsum.photos/600/300/?image=21"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2"
				>
					<b-card-text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</b-card-text>

					<router-link to="/event" class="btn btn-primary"
						>View event</router-link
					>
					<template #footer>
						<em>Pirce: $10</em>
					</template>
				</b-card>
			</b-col>
			<b-col>
				<b-card
					title="Card Title"
					img-src="https://picsum.photos/600/300/?image=20"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2"
				>
					<b-card-text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</b-card-text>

					<router-link to="/event" variant="primary"
						>View event</router-link
					>
					<template #footer>
						<em>Pirce: $10</em>
					</template>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>
