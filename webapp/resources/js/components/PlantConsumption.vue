<template>
  <div>
		<v-card>
			<v-card-title>
				<img src="/img/abb-logo.png" alt="">
				ABB Ability™ Electrical Distribution Control System
			</v-card-title>

			<v-container>
				<v-flex xs12>
					Connect your ABB Dashboard, to add your Plant's consumption
				</v-flex>

				<v-flex xs12>
					<v-text-field
						v-model="label"
						label="API Key"
					></v-text-field>
				</v-flex>

				<v-flex xs12>
					<v-text-field
						v-model="label"
						label="API Secret"
					></v-text-field>
				</v-flex>
			</v-container>
		</v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>