<template>
    <div class="flex items-top justify-center">
        <div class="shadow-md rounded-sm overflow-hidden">
            <input v-model="inputVal" type="text" id="search" placeholder="Cerca un punto vendita" @keyup.enter="selectSuggestsGroup" class=" w-96 focus:ring-0 border-transparent focus:border-transparent">
            <div v-if="suggestions.length >= 1" class="suggest-box z-10 relative border">
                <div v-for="suggestion in suggestions" :key="suggestion.id"  @click="selectSuggest(suggestion)" class="suggest-item bg-white text-xs text-gray-400 py-2 px-3 hover:bg-slate-100 cursor-pointer">{{ suggestion.taxonomy }}</div>
            </div>
        </div>
        <div class=" ml-3 w-10 h-10 flex justify-center items-center cursor-pointer bg-white shadow-md rounded-sm text-lg" @click="selectSuggestsGroup">
            <i class="fas fa-search invert-[40%] hover:invert-0"></i>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const props = defineProps({
    salesPoints: Object
})

let suggestions = ref([]);
let inputVal = ref([]);
let suggestSelected = reactive({});

// Osservo il valore inserito dall'utente, e popolo la variabile suggest con i record trovati
watch(inputVal, (newInputVal) => {
    let inputValArr = newInputVal.split(' ');
    if(newInputVal.length >= 1) {
        suggestions.value = props.salesPoints.filter((record) => {
            let fleg = ref(true);
            inputValArr.forEach(el => {
                if (!record.taxonomy.toLowerCase().includes(el.toLowerCase())){
                    fleg.value = false;
                }
            });
            return fleg.value;
        });
    } else {
        suggestions.value = [];
    }
})

const emit = defineEmits(['inputVal']);


// funzione per emettere il punto vendita selezionato
const emitSalesPoint = () => {
    emit('inputVal', suggestSelected);
    inputVal.value = "";
    suggestSelected = {};
};


// Popolo la variabile suggest con il valore selezionato ed attivo l'emit
const selectSuggest = (suggest) => {
    suggestSelected = [suggest];
    emitSalesPoint();
}

// Popolo la variabile suggest con il gruppo di valori cercati ed attivo l'emit
const selectSuggestsGroup = () => {
    suggestSelected = suggestions.value;
    emitSalesPoint();
}

</script>

<style>
</style>
