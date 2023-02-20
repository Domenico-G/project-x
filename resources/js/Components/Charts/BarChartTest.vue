<template>
    <div>
        <h2>Vue.js and D3 Line Chart</h2>
        <div ref="content"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import * as d3 from 'd3';

const content = ref(null)
const letters = ref(["A", "B", "C", "D", "E", "F",])

onMounted(() => {
    d3.select(content.value).selectAll("div").data(letters.value).enter().append('div').text(d => d);
    console.log(content.value);

})


</script>
