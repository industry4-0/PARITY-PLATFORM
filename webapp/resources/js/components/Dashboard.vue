<template>
  <div id="chart">
    <canvas id="smp-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import smpChartData from './smp-data.js';

export default {  
  data() {
    return {
      smpData: smpChartData,
    }
  },

  mounted() {
    this.createChart('smp-chart', this.smpData);
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