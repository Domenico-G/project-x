<template>
    <div class="overflow-hidden max-h-screen">
        <!-- Header -->
        <the-header class="border-b border-[#cbd0dd]"></the-header>
        <div class="flex h-[calc(100vh-64px)] ">
            <!-- Sidebar -->
            <the-sidebar class="border-r border-[#cbd0dd]"></the-sidebar>
            <!-- Page Content -->
            <main class="w-[calc(100%-175px)] relative">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import TheHeader from './TheHeader.vue';
import TheSidebar from './TheSidebar.vue';
import { useToast } from "vue-toastification";
import { usePage } from '@inertiajs/inertia-vue3';
import { computed, ref, watch } from 'vue';

const toast = useToast();
const page = usePage();

const flash = computed(function () {
    return page.props.value.flash;
});

watch(page.props, function (val) {
    if (val.flash.notification !== null) {
        toast.success(val.flash.notification.message, {
            timeout: 5000
        });
    }
}, {
    immediate: true,
    deep: true,
});


</script>
