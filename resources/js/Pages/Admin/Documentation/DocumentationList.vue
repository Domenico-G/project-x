<template>
    <div class="p-4 bg-slate-200 w-64 h-full">
        <div class=" cursor-pointer" v-for="(record, i) in props.records" :key="record.id"  @click="emitDocumentation(record)">
            Documentazione {{ i }}
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    records: Object,
});

const emit = defineEmits(['documentationEmited']);

// funzione per emettere il punto vendita selezionato
const emitDocumentation = (val) => {
    emit('documentationEmited', val);
};




</script>
