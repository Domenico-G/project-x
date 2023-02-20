<template>
    <AuthenticatedLayout>
        <div class="p-4 sm:p-6 lg:p-8 bg-neutral-100">
            <div class="flex justify-between">
                <div class="flex justify-between">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight text-3xl font-bold">
                        Nuovo Punto Vendita
                    </h2>
                </div>
                <Link :href="route('sales-point.index')">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs font-bold px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
                    <i class="fa-solid fa-chevron-left"></i>
                    Indietro
                </button>
                </Link>
            </div>
        </div>
        <form autocomplete="off" @submit.prevent="submit" class="px-8 py-2 h-[calc(100%-102px)] overflow-y-auto">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div class=" grid gap-3 grid-cols-6">
                    <div class=" col-span-3">
                        <input-label for="name" value="Nome"></input-label>
                        <base-input v-model="form.name" placeholder="Nome"></base-input>
                        <input-error class="mt-2" :message="form.errors.name"></input-error>
                    </div>
                    <div class=" col-span-3">
                        <input-label for="denomination" value="Denominazine"></input-label>
                        <base-input v-model="form.denomination" placeholder="Denominazine"></base-input>
                        <input-error class="mt-2" :message="form.errors.denomination"></input-error>
                    </div>
                </div>

                <div class=" grid gap-3 grid-cols-7">
                    <div class=" col-span-4">
                        <input-label for="street" value="Via"></input-label>
                        <base-input v-model="form.street" placeholder="Via"></base-input>
                        <input-error class="mt-2" :message="form.errors.street"></input-error>
                    </div>
                    <div class=" col-span-3">
                        <input-label for="street_number" value="Numero Civico"></input-label>
                        <base-input v-model="form.street_number" placeholder="Numero Civico"></base-input>
                        <input-error class="mt-2" :message="form.errors.street_number"></input-error>
                    </div>
                </div>
                <div class=" grid gap-3 grid-cols-7">
                    <div class=" col-span-4">
                        <input-label for="city" value="Citta"></input-label>
                        <base-input v-model="form.city" placeholder="Citta"></base-input>
                        <input-error class="mt-2" :message="form.errors.city"></input-error>
                    </div>
                    <div class=" col-span-3">
                        <input-label for="postcode" value="Codice Postale"></input-label>
                        <base-input v-model="form.postcode" placeholder="Codice Postale"></base-input>
                        <input-error class="mt-2" :message="form.errors.postcode"></input-error>
                    </div>
                </div>
                <div class=" grid gap-3 grid-cols-6">

                    <div class=" col-span-3">
                        <input-label for="province" value="Provincia"></input-label>
                        <base-input v-model="form.province" placeholder="Provincia"></base-input>
                        <input-error class="mt-2" :message="form.errors.province"></input-error>
                    </div>
                    <div class=" col-span-3">
                        <input-label for="state" value="Stato"></input-label>
                        <base-input v-model="form.state" placeholder="Stato"></base-input>
                        <input-error class="mt-2" :message="form.errors.state"></input-error>
                    </div>
                </div>
                <div>
                    <input-label for="spc" value="Codice Negiozio"></input-label>
                    <base-input v-model="form.spc" placeholder="Codice Negiozio"></base-input>
                    <input-error class="mt-2" :message="form.errors.spc"></input-error>
                </div>
                <div>
                    <input-label for="description" value="Descrizione"></input-label>
                    <base-input v-model="form.description" placeholder="Descrizione"></base-input>
                    <input-error class="mt-2" :message="form.errors.description"></input-error>
                </div>
                <div>
                    <input-label for="note" value="Note"></input-label>
                    <base-input v-model="form.note" placeholder="Note"></base-input>
                    <input-error class="mt-2" :message="form.errors.note"></input-error>
                </div>
                <div>
                    <input-label for="phone" value="Telefono"></input-label>
                    <base-input v-model="form.phone" placeholder="Telefono"></base-input>
                    <input-error class="mt-2" :message="form.errors.phone"></input-error>
                </div>
                <div>
                    <input-label for="latitude" value="Latitudine"></input-label>
                    <base-input v-model="form.latitude" placeholder="Latitudine"></base-input>
                    <input-error class="mt-2" :message="form.errors.latitude"></input-error>
                </div>
                <div>
                    <input-label for="longitude" value="Longitudine"></input-label>
                    <base-input v-model="form.longitude" placeholder="Longitudine"></base-input>
                    <input-error class="mt-2" :message="form.errors.longitude"></input-error>
                </div>
            </div>
            <primary-button type="submit">Conferma</primary-button>

        </form>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout.vue";
import InputError from '@/Components/Input/InputError.vue';
import InputLabel from '@/Components/Input/InputLabel.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import BaseInput from '@/Components/Input/BaseInput.vue';
import { Link, useForm } from '@inertiajs/inertia-vue3';
import { reactive } from "@vue/reactivity";

const props = defineProps({
    record: {
        type: Object,
        default: null
    }
})

const form = useForm({
    name: props.record ? props.record.name : '',
    denomination: props.record ? props.record.denomination : '',
    street: props.record ? props.record.street : '',
    street_number: props.record ? props.record.street_number : '',
    city: props.record ? props.record.city : '',
    state: props.record ? props.record.state : '',
    province: props.record ? props.record.province : '',
    postcode: props.record ? props.record.postcode : '',
    spc: props.record ? props.record.spc : '',
    description: props.record ? props.record.description : '',
    note: props.record ? props.record.note : '',
    phone: props.record ? props.record.phone : '',
    latitude: props.record ? props.record.latitude : '',
    longitude: props.record ? props.record.longitude : '',
})

const submit = () => {
    if (props.record === null) {
        form.post(route('sales-point.store'));
    } else {
        form.patch(route('sales-point.update', props.record.id));

    }
};

</script>

