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

				<v-btn>
					Save Credentials
				</v-btn>
			</v-container>
		</v-card>

		<v-flex xs12 mt-4>
			<v-card>
				<canvas id="plant-chart"></canvas>
			</v-card>
		</v-flex>
  </div>
</template>

<script>
import Chart from 'chart.js'
import consumptionChartData from './plant-data.js';

export default {  
  data() {
    return {
      consumptionData: consumptionChartData,
    }
  },

  mounted() {
    this.createChart('plant-chart', this.consumptionData);
  },

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  } 
}
</script>

<style>

</style>