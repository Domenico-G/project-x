<template>
    <div class="w-44 z-0">
        <div>
            <!-- Navigation Links -->
            <div class="p-2">
                <Link :href="route('dashboard')" class="nav-link">
                <div class="menu-link">
                    <i class="fa-solid fa-chart-line mr-3"></i>
                    <p class="text-xs">Dashboard</p>
                </div>
                </Link>
                <Link :href="route('maps')" class="nav-link">
                <div class="menu-link">
                    <i class="fa-solid fa-map-location mr-3"></i>
                    <p class="text-xs">Maps</p>
                </div>
                </Link>
                <Link :href="route('sales-point.index')" class="nav-link">
                <div class="menu-link">
                    <i class="fa-sharp fa-solid fa-universal-access mr-3"></i>
                    <p class="text-xs">Punti Vendita</p>
                </div>
                </Link>

                <Link :href="route('users.index')" class="nav-link">
                <div class="menu-link">
                    <i class="fa-solid fa-user mr-3"></i>
                    <p class="text-xs">Lista Utenti</p>
                </div>
                </Link>
                <Link :href="route('documentation.index')" class="nav-link">
                <div class="menu-link">
                    <i class="fa-solid fa-book  mr-3"></i>
                    <p class="text-xs">Documentazione</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>

<style scoped>
.nav-link {
    display: flex;
    align-items: center;
}

.menu-link {
    width: 100%;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    color: #525b75;
}

.menu-link:hover {
    background: #eff2f6;
}
</style>
