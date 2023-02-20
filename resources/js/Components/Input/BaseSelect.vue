<template>
    <select :class="`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 mr-3`" :name="props.name"
        @input="$emit('update:modelValue', $event.target.value)">
        <option class="text-xs" v-for="(option, index) in props.options" :key="index" :value="index"
            >{{ option }}</option>
    </select>
</template>

<script setup>
const props = defineProps({
    options: {
        type: Object,
        defalut: { all: 'Inserisci valori' }
    },
    class: {
        type: String
    },
    name: {
        type: String
    }
})

defineEmits(['update:modelValue'])
</script>
