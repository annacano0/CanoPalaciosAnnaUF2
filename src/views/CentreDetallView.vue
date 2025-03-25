<script setup>
import { useRouter } from "vue-router";
import { useFetch } from "@/composables/useFetch";

const { anyDetall, detallCentre } = defineProps({
    anyDetall: String, 
    detallCentre: String
});

const {getData, data} = useFetch(`?any=${anyDetall}&&tipus_de_centres=${detallCentre}`)
getData()

const router = useRouter();
const goBack = () => {
  router.push(`/anys/${anyDetall}`);
};

</script>
<template>
    <h2>Informe</h2>
    <button @click="goBack">Enrere</button>
    <ul v-if="data">
        
    <li>data</li></ul>
    <p v-else>Dades no disponibles</p>
</template>