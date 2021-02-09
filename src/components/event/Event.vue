<template>
	<b-container>
		<div class="mt-5">
			<b-jumbotron header="Event Details" class="text-center">
			</b-jumbotron>
		</div>

		<div class="d-flex justify-content-center">
			<b-card no-body class="overflow-hidden" style="max-width: 540px;">
				<b-row no-gutters>
					<b-col md="6">
						<b-card-img
							src="https://picsum.photos/400/400/?image=20"
							alt="Image"
							class="rounded-0"
						></b-card-img>
					</b-col>
					<b-col md="6">
						<b-card-body title="Horizontal Card">
							<b-card-text>
								This is a wider card with supporting text as a
								natural lead-in to additional content. This
								content is a little bit longer.
							</b-card-text>

							<router-link
								to="/office"
								variant="primary"
								class="text-center btn btn-info btn-sm"
								>Edit event</router-link
							>
						</b-card-body>

						<b-list-group flush>
							<b-list-group-item
								><span class="font-weight-bold">Price:</span>
								$20
							</b-list-group-item>
						</b-list-group>
					</b-col>
				</b-row>
			</b-card>
		</div>
	</b-container>
</template>
