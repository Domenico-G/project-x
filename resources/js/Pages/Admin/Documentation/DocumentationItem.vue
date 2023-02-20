<template>
    <div class="p-4 w-[calc(100%-256px)] h-[calc(100%)] overflow-y-auto">
        <InkMde v-if="props.recordSelected" v-model="props.recordSelected.markdown" :options="options" />
        <div v-else class=" border border-[#f5f5f5] rounded border-2 p-4 w-full h-full overflow-y-auto flex justify-center items-center">
            <p class=" font-bold text-4xl text-gray-300"><i class="fa-solid fa-book mr-3"></i>Seleziona un documento</p>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity';
import InkMde from 'ink-mde/vue'

const props = defineProps({
    recordSelected: Object,
});

const options = reactive({
    interface: {
        appearance: 'light',
        readonly: true,
        lists:true
    },
});

</script>

<style>

.cm-focused {
    outline: 0px !important;
}

.ink-mde .ink-mde-details {
    display: none!important;
}

</style>
