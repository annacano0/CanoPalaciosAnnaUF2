<script setup>
import { useRouter } from 'vue-router'
import { useFetch } from '@/composables/useFetch'

const { anyDetall, detallCentre } = defineProps({
  anyDetall: String,
  detallCentre: String,
})

const { getData, data } = useFetch(`?any=${anyDetall}&&tipus_de_centres=${detallCentre}`)
getData()

const router = useRouter()
const goBack = () => {
  router.push(`/detall_any/${anyDetall}`)
}
console.log(data)
</script>
<template>
  <h2>Informe</h2>
  <button @click="goBack">Enrere</button>
  <ul v-if="data">
    <li><span>Beques Dones: </span>{{ data[0].formaci_dones }} (%)</li>
    <li><span>Beques Homes: </span>{{ data[0].formaci_homes }} (%)</li>
    <li><span>Mobilitat Dones: </span>{{ data[0].mobilitat_dones }} (%)</li>
    <li><span>Mobilitat Homes: </span>{{ data[0].mobilitat_homes }} (%)</li>
  </ul>
  <p v-else>Dades no disponibles</p>
</template>

<style scoped>
span {
  font-weight: bolder;
}
</style>
