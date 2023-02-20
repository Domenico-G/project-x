<template>
    <AuthenticatedLayout>
        <div class="overflow-auto p-5">
            <div class="graph">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight pb-16">
                    Dashboard
                </h2>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="wrapper-chart">
                        <bar-chart class="chart-1"></bar-chart>
                        <p>Visite Giornaliere</p>
                    </div>
                    <div class="wrapper-chart">
                        <bar-chart class="chart-2"></bar-chart>
                        <p>Visite Settimanali</p>
                    </div>
                    <div class="wrapper-chart">
                        <bar-chart class="chart-3"></bar-chart>
                        <p>Visite Mensili</p>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout.vue";
import BarChart from "../../Components/Charts/BarChart.vue";
</script>

<style scoped>
.wrapper-chart {
    background: #ffffff;
    padding: 1rem;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
    border-radius: 6px;
}

.wrapper-chart p {
    padding-top: 15px;
}

.chart-1 {
    background: linear-gradient(60deg, #ec407a, #d81b60);
    border-radius: 6px;
    padding: 6px;
    box-shadow: 0 12px 20px -10px rgb(233 30 99 / 28%),
        0 4px 20px 0 rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(233 30 99 / 20%);
    margin-top: -30px;
}

.chart-2 {
    background: linear-gradient(60deg, #66bb6a, #43a047);
    border-radius: 6px;
    padding: 6px;
    box-shadow: 0 12px 20px -10px rgb(233 30 99 / 28%),
        0 4px 20px 0 rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(233 30 99 / 20%);
    margin-top: -30px;
}

.chart-3 {
    background: linear-gradient(60deg, #26c6da, #00acc1);
    border-radius: 6px;
    padding: 6px;
    box-shadow: 0 12px 20px -10px rgb(233 30 99 / 28%),
        0 4px 20px 0 rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(233 30 99 / 20%);
    margin-top: -30px;
}
</style>
