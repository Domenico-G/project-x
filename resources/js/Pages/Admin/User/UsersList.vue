<template>
    <AuthenticatedLayout>
        <div class="py-2 px-4 sm:p-6 lg:p-8 bg-neutral-100 border-b border-[#cbd0dd]">
            <div class="flex justify-between mb-3">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight text-3xl font-bold">
                    Lista Utenti
                </h2>
            </div>
            <div class="flex items-center justify-between">
                <div class="bulk-action flex justify-start items-center">
                    <base-select class="mr-2" :options="recordsAction" :value="bulkAction"
                        v-model="bulkAction"></base-select>
                    <primary-button @click="massActionRecords" type="button">Applica</primary-button>
                </div>
                <Link :href="route('users.create')">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs font-bold px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
                    <i class="fa-solid fa-plus"></i>
                    Nuovo Utente
                </button>
                </Link>
            </div>
        </div>
        <div class="overflow-x-auto relative shadow-md  h-[calc(100%-152px)] overflow-y-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            <input type="checkbox" v-model="checkAll" />
                        </th>
                        <th scope="col" class="py-3 px-6">ID</th>
                        <th scope="col" class="py-3 px-6">Nome</th>
                        <th scope="col" class="py-3 px-6">Cognome</th>
                        <th scope="col" class="py-3 px-6">Email</th>
                        <th scope="col" class="py-3 px-6">Iscrizione</th>
                        <th scope="col" class="py-3 px-6">Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="record in props.records" :key="record.id"
                        class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input type="checkbox" :value="record.id" v-model="form.recordsId" />
                        </td>
                        <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ record.id }}
                        </td>
                        <td class="py-4 px-6">
                            {{ record.name }}
                        </td>
                        <td class="py-4 px-6">
                            {{ record.surname }}
                        </td>
                        <td class="py-4 px-6">
                            {{ record.email }}
                        </td>
                        <td class="py-4 px-6">
                            {{ record.created_at }}
                        </td>
                        <td class="py-4 px-6">
                            <Link :href="route('users.edit', record.id)">Modifica</Link>
                            <p @click="deleteRecord(record.id)">Elimina</p>
                        </td>
                    </tr>
                </tbody>
            </table>
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
    form.delete(route("users.destroy", id));
};

// Funzione le azioni di gruppo
const massDeleteRecords = () => {
    if (bulkAction.value === "delete") {
        form.delete(route("users-mass-destroy"));
        bulkAction.value = "all";
    }
};
</script>
