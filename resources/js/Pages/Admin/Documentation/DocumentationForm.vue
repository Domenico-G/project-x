<template>
    <AuthenticatedLayout>
        <div class="p-4 sm:p-6 lg:p-8 bg-neutral-100">
            <div class="flex justify-between">
                <div class="flex justify-between">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight text-3xl font-bold">
                        Nuovo Documento
                    </h2>
                </div>
                <Link :href="route('documentation.index')">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs font-bold px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
                    <i class="fa-solid fa-chevron-left"></i>
                    Indietro
                </button>
                </Link>
            </div>
        </div>
        <form autocomplete="off" @submit.prevent="submit" class="px-8 py-2 h-[calc(100%-102px)] overflow-y-auto">
            <InkMde v-model="form.markdown" :options="options" />
            <primary-button type="submit">Conferma</primary-button>

        </form>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout.vue";
import InputError from '@/Components/Input/InputError.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import { Link, useForm } from '@inertiajs/inertia-vue3';
import { reactive, ref } from "@vue/reactivity";
import InkMde from 'ink-mde/vue'

const props = defineProps({
    record: {
        type: Object,
        default: null
    }
});

const options = reactive({
    interface: {
        appearance: 'light',
        lists: true,
        toolbar: true,
    },
});

const form = useForm({
    markdown: props.record ? props.record.text : '',

});

const submit = () => {
    if (props.record === null) {
        form.post(route('documentation.store'));
    } else {
        form.patch(route('documentation.update', props.record.id));

    }
};

</script>


<style>
.cm-focused {
    outline: 0px !important;
}
</style>

