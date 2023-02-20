<template>
    <AuthenticatedLayout>
        <div class="p-4 sm:p-6 lg:p-8 bg-neutral-100">
            <div class="flex justify-between">
                <div class="flex justify-between">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight text-3xl font-bold">
                        Nuovo Utente
                    </h2>
                </div>
                <Link :href="route('users.index')">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs font-bold px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
                    <i class="fa-solid fa-chevron-left"></i>
                    Indietro
                </button>
                </Link>
            </div>
        </div>
        <form autocomplete="off" @submit.prevent="submit"  class="px-8 py-2 h-[calc(100%-102px)] overflow-y-auto">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <input-label for="name" value="Nome"></input-label>
                    <base-input v-model="form.name" placeholder="Nome"></base-input>
                    <input-error class="mt-2" :message="form.errors.name"></input-error>
                </div>
                <div>
                    <input-label for="surname" value="Cognome"></input-label>
                    <base-input v-model="form.surname" placeholder="Cognome"></base-input>
                    <input-error class="mt-2" :message="form.errors.surname"></input-error>
                </div>
                <div>
                    <input-label for="email" value="Email"></input-label>
                    <base-input v-model="form.email" placeholder="Email" type="email"></base-input>
                    <input-error class="mt-2" :message="form.errors.email"></input-error>
                </div>
                <div>
                    <input-label for="password" value="Password"></input-label>
                    <base-input v-model="form.password" placeholder="********" type="password" autocomplete="off"></base-input>
                    <input-error class="mt-2" :message="form.errors.password"></input-error>
                </div>
                <div>
                    <input-label for="password_confirmation" value="Conferma Password"></input-label>
                    <base-input v-model="form.password_confirmation" placeholder="********"
                        type="password" autocomplete="off"></base-input>
                    <input-error class="mt-2" :message="form.errors.password_confirmation"></input-error>
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
    surname: props.record ? props.record.surname : '',
    email: props.record ? props.record.email : '',
    password: '',
    password_confirmation: '',
})

const submit = () => {
    if (props.record === null) {
        form.post(route('users.store'));
    } else {
        form.patch(route('users.update', props.record.id));

    }
};

</script>

