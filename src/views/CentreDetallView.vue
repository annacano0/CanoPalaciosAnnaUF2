<script setup>
import { useRouter } from 'vue-router'
import { useFetch } from '@/composables/useFetch'

const { anyDetall, detallCentre } = defineProps({
  anyDetall: String,
  detallCentre: String,
})
const filter = `?any=${anyDetall}&&tipus_de_centres=${detallCentre}`
const { getData, data } = useFetch(filter)
getData()

const router = useRouter()
const goBack = () => {
  router.push(`/detall_any/${anyDetall}`)
}

const getPercentages = (val1, val2) => {
  const total = parseInt(val1) + parseInt(val2)
  const res1 = (val1 * 100) / total
  const res2 = (val2 * 100) / total

  return [res1.toFixed(2), res2.toFixed(2)]
}

const pergentagesBeques = getPercentages(data.value[0].formaci_dones, data.value[0].formaci_homes)

const pergentagesMov = getPercentages(data.value[0].mobilitat_dones, data.value[0].mobilitat_homes)
</script>
<template>
  <h2>Informe</h2>
  <button @click="goBack">Enrere</button>
  <ul v-if="data">
    <li><span>Beques Dones: </span>{{ data[0].formaci_dones }} ({{ pergentagesBeques[0] }}%)</li>
    <li><span>Beques Homes: </span>{{ data[0].formaci_homes }} ({{ pergentagesBeques[1] }}%)</li>
    <li><span>Mobilitat Dones: </span>{{ data[0].mobilitat_dones }} ({{ pergentagesMov[0] }}%)</li>
    <li><span>Mobilitat Homes: </span>{{ data[0].mobilitat_homes }} ({{ pergentagesMov[1] }}%)</li>
  </ul>
  <p v-else>Dades no disponibles</p>
</template>

<style scoped>
span {
  font-weight: bolder;
}
</style>
