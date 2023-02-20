<template>
    <h1>Info Sales Point {{ props.record }}</h1>
    <Link :href="route('sales-point.edit', props.record)">
    <div
        class="record-action cursor-pointer bg-blue-800 text-white flex text-xs justify-center items-center p-3 mx-1 rounded-md">
        <i class="fa-solid fa-pen-to-square"></i>
    </div>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps({
    record: Number
})

</script>
