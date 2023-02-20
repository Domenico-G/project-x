<template>
    <AuthenticatedLayout>
        <div class="py-2 px-4 sm:p-6 lg:p-8 bg-neutral-100 border-b border-[#cbd0dd]">
            <div class="flex justify-between mb-3">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight text-3xl font-bold">
                    Lista Punti Vendita
                </h2>
            </div>
            <div class="flex items-center justify-between">
                <div class="bulk-action flex justify-start items-center">
                    <base-select class="mr-2" :options="recordsAction" :value="bulkAction"
                        v-model="bulkAction"></base-select>
                    <primary-button @click="massActionRecords" type="button">Applica</primary-button>
                </div>
                <Link :href="route('sales-point.create')">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs font-bold px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
                    <i class="fa-solid fa-plus"></i>
                    Nuovo Punto Vendita
                </button>
                </Link>
            </div>
        </div>
        <div class="record-listF">
            <div
                class="record-row py-4 px-8 flex justify-between items-center border-b-[1px] border-[#e3e6ed] bg-gray-800">
                <div class="flex items-center">
                    <div class="record-checkbox mr-3">
                        <input
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                            type="checkbox" v-model="checkAll" />
                    </div>
                    <div class="record-title text-xs uppercase font-medium">
                        <p class="text-white">Nome Punto Vendita</p>
                    </div>
                </div>
                <div class="record-action-list flex items-center">
                    <div class="record-title text-xs uppercase font-medium">
                        <p class="text-white">Azioni</p>
                    </div>
                </div>
            </div>
            <div v-for="record in props.records" :key="record.id"
                class="record-row py-4 mx-8 flex justify-between items-center border-b-[1px] border-[#e3e6ed]">
                <div class="flex items-center">
                    <div class="record-checkbox mr-3">
                        <input
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                            type="checkbox" :value="record.id" v-model="form.recordsId" />
                    </div>
                    <div class="record-title text-sm">
                        <p>{{ record.name }}</p>
                    </div>
                </div>
                <div class="record-action-list flex items-center">
                    <div
                        class="record-action cursor-pointer bg-slate-700 border-2 border-slate-700 hover:bg-white text-white hover:text-slate-700 flex text-xs justify-center items-center p-3 mx-1 rounded-md">
                        <i class="fa-solid fa-link"></i>
                    </div>
                    <Link :href="route('sales-point.edit', record.id)">
                    <div
                        class="record-action cursor-pointer bg-blue-800 text-white flex text-xs justify-center items-center p-3 mx-1 rounded-md">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    </Link>
                    <div @click="deleteRecord(record.id)"
                        class="record-action cursor-pointer bg-red-700 text-white text-xs flex justify-center items-center p-3 mx-1 rounded-md">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
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
import { watch } from "@vue/runtime-core";

const props = defineProps({
    records: Object,
});

const form = useForm({
    recordsId: [],
});

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
    form.delete(route("sales-point.destroy", id));
};

// Funzione le azioni di gruppo
const massActionRecords = () => {
    if (bulkAction.value === "delete") {
        form.delete(route("sales-point-mass-destroy"));
        bulkAction.value = "all";
    }
};
</script>

<style>
.record-title {
    color: #141824;
}
</style>
