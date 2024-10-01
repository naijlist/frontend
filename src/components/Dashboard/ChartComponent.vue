<script setup lang="ts">
import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

onMounted(() => {
  const ctx = document.getElementById('barChart')
  // const DATA_COUNT = 7;
  // const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Average Revenue per month',
          data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})
</script>
<template>
  <div>
    <canvas id="barChart"></canvas>
  </div>
</template>
