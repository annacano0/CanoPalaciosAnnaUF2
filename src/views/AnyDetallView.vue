<script setup>
import { useRouter } from 'vue-router'
import { useFetch } from '@/composables/useFetch'
const router = useRouter()
const goBack = () => {
  router.push('/anys')
}

const { anyDetall } = defineProps({
  anyDetall: String,
})

const { getData, data } = useFetch(`?any=${anyDetall}`)
getData()
</script>
<template>
  <h2>Detall de l'any {{ anyDetall }}</h2>
  <button @click="goBack">Enrere</button>
  <ul v-if="data">
    <li v-for="i in data" :key="i.tipus_de_centres">
      <router-link
        :to="{
          name: 'centreDetall',
          params: { anyDetall: i.any, detallCentre: i.tipus_de_centres },
        }"
      >
        {{ i.tipus_de_centres }}
      </router-link>
    </li>
  </ul>
  <p v-else>Dades no disponibles</p>
</template>
