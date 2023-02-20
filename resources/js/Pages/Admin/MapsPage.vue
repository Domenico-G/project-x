<template>
    <AuthenticatedLayout>
        <div class="absolute top-3 left-3 z-50">
            <SearchBar @input-val="salesPointSelected" :salesPoints="props.records"></SearchBar>

        </div>
        <div>
            <div class="absolute bottom-28 right-[10px] z-50 h-10 w-10 flex justify-center items-center cursor-pointer bg-white shadow-[0_1px_4px_-1px_rgb(0 0 0 / 30%] rounded-sm"
                @click="findUserPosition">
                <img class="h-7 w-7 invert-[40%] hover:invert-0" src="@/images/icons/viewfinder.png" alt="viewfinder">
            </div>
        </div>
        <div ref="mapDiv" class="maps h-full w-full">
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout.vue";
import { useGeolocation } from "@/useGeolocation.js";
import { useToast } from "vue-toastification";
import { MarkerClusterer, GridAlgorithm } from "@googlemaps/markerclusterer";
import { reactive, ref } from "@vue/reactivity";
import { Loader } from "@googlemaps/js-api-loader";
import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, watch } from "@vue/runtime-core";
import SearchBar from "@/Components/Maps/SearchBar.vue";
import { Inertia } from "@inertiajs/inertia";

const props = defineProps({
    records: Object
})

let userPosition = ref(null);
const mapDiv = ref(null);
let markers = ref(null);
let infoWindow = ref(null)
let map = ref(null);
let cluster = ref(null);
const toast = useToast();

const GOOGLE_MAPS_API_KEY = 'AIzaSyB-0a4hmJCOTEt7t-Uk-FnZR1NJHaNg0TA';
const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
const { coords } = useGeolocation();
const center = ref({ lat: 42.74501513597965, lng: 12.925451711217713 })

// Cordinate dell'utente sempre aggiornate
const currPos = computed(() => ({
    lat: coords.value.latitude,
    lng: coords.value.longitude
}))

// Funzione che riceve il punto vendita come evento ed aggirona la mappa con i nuovi valori
const salesPointSelected = (val) => {
    if (val.length == 1) {
        markers = val.map(record => {
            const marker = new google.maps.Marker({
                position: { lat: (record.latitude / 1), lng: (record.longitude / 1) },
            });
            addInfoWindow(marker, record)
            return marker
        })

        cluster.clearMarkers();
        cluster.addMarkers(markers);
        toast.success('Punto vendita trovato', {
            timeout: 5000
        });
    } else if (val.length > 1) {
        markers = val.map(record => {
            const marker = new google.maps.Marker({
                position: { lat: (record.latitude / 1), lng: (record.longitude / 1) },
            });
            addInfoWindow(marker, record)
            return marker
        })

        cluster.clearMarkers();
        cluster.addMarkers(markers);
        toast.success('Punti vendita trovati', {
            timeout: 5000
        });
    } else {
        toast.error('Nessun punto vendita trovato', {
            timeout: 5000
        });
    }
}

onMounted(async () => {
    await loader.load();
    map = new google.maps.Map(mapDiv.value, {
        mapId: "2c13413f5730d1f4",
        center: center.value,
        zoom: 6,
        mapTypeControl: false,
        streetViewControl: false,
    });

    infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });

    markers = props.records.map(record => {
        const marker = new google.maps.Marker({
            position: { lat: (record.latitude / 1), lng: (record.longitude / 1) },
        });

        addInfoWindow(marker, record)

        return marker
    })

    let algorithm = new GridAlgorithm({ gridSize: 20 });
    cluster = new MarkerClusterer({ map, markers, algorithm });
});


document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-marker")) {
        Inertia.get(`sales-point/${event.target.id}/edit`)
    }

});

// Funzione per creare gli eventi sulle infowindos
const addInfoWindow = (marker, record) => {
    marker.addListener("click", () => {
        infoWindow.setContent(infowindowContent(record));
        infoWindow.open(map, marker);
        map.setCenter({ lat: (record.latitude / 1), lng: (record.longitude / 1) });
    });
}

const infowindowContent = (record) => {
    const string = `<div class="infowindow-box">
                        <div class="title">${record.name}</div>
                        <div class="description">${record.description}</div>
                        <button id="${record.id}" class="btn-marker">Leggi documenti</button>
                    </div>`;
    return string
}


// Questa funzione serve per indicare la posizione dell'utente
const findUserPosition = () => {
    if (userPosition.value !== null) userPosition.setMap(null);

    userPosition = new google.maps.Marker({
        position: currPos.value,
        map: map,
        icon: "http://127.0.0.1:8000/public/images/icons/point.svg"
    });
    map.setCenter(currPos.value);
    map.setZoom(17);
}
</script>

<style>
.infowindow-box .title {
    font-size: 20px;
    font-weight: 800;
}

.infowindow-box .btn-marker {
    background: #4299e1;
    padding: 5px 10px;
    border-radius: 2px;
    margin-top: 10px;
    color: #fff;
    font-weight: 400;
    }
</style>


