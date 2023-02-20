<template>
    <AuthenticatedLayout>
        <div class="py-2 px-4 sm:p-6 lg:p-8 bg-neutral-100 border-b border-[#cbd0dd]">
            <div class="flex justify-between mb-3">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight text-3xl font-bold">
                    Documentazione Punti vendita
                </h2>
            </div>
            <div class="flex items-center justify-between">
                <div class="bulk-action flex justify-start items-center">
                    <base-select class="mr-2" :options="recordsAction" :value="bulkAction"
                        v-model="bulkAction"></base-select>
                    <primary-button @click="massActionRecords" type="button">Applica</primary-button>
                </div>
                <Link :href="route('documentation.create')">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs font-bold px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
                    <i class="fa-solid fa-plus"></i>
                    Nuovo Documento
                </button>
                </Link>
            </div>
        </div>
        <div class="h-[calc(100%-152px)] overflow-y-auto flex ">
            <documentation-list :records="props.records" @documentation-emited="handleSelecteDocumentation"></documentation-list>
            <documentation-item :recordSelected="recordSelected"></documentation-item>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import BaseInput from "@/Components/Input/BaseInput.vue";
import BaseSelect from "@/Components/Input/BaseSelect.vue";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/UI/PrimaryButton.vue";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import DocumentationList from '@/Pages/Admin/Documentation/DocumentationList.vue'
import DocumentationItem from '@/Pages/Admin/Documentation/DocumentationItem.vue'
import { watch } from "@vue/runtime-core";

const props = defineProps({
    records: Object,
});

const form = useForm({
    recordsId: [],
});

let recordSelected = ref(null);

const bulkAction = ref("all");
const checkAll = ref(false);
const recordsAction = reactive({
    all: "Azioni di gruppo",
    delete: "Elimina",
    export: "Esporta",
    import: "Importa",
});

// Funzione per selezionare o deselezionare tutti i record
watch(checkAll, (newVal, oldVal) => {
    if (newVal) {
        props.records.forEach((el) => {
            form.recordsId.push(el.id);
        });
        console.log(form.recordsId);
    } else {
        form.recordsId = [];
        console.log(form.recordsId);
    }
});

// Funzione per eliminare il singolo record
const deleteRecord = (id) => {
    form.delete(route("documentation.destroy", id));
};

// Funzione le azioni di gruppo
const massDeleteRecords = () => {
    if (bulkAction.value === "delete") {
        form.delete(route("documentation-mass-destroy"));
        bulkAction.value = "all";
    }
};

// Ascoltatore evento cambio documentazione
const handleSelecteDocumentation = (val) => {
    recordSelected.value = val
}
</script>
