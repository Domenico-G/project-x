<template>
    <Bar :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { reactive } from '@vue/reactivity';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = reactive({
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    datasets: [{
        data: [40, 20, 12, 44, 11, 54, 25, 75, 22, 37, 2, 66],
    }]
});

const chartOptions = reactive({
    responsive: true,
    backgroundColor: '#ffffff8f',
    color: '#ffffff',
    scales: {
        x: {
            ticks: {
                color: '#ffffff'
            },
            grid: {
                display: false,
            },
            border: {
                display: false,
            }
        },
        y: {
            ticks: {
                color: '#ffffff'
            },
            grid: {
            },
            border: {
                display: false,
                dash: [5]
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }

});


</script>
