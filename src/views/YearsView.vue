<script setup>
import { computed } from 'vue'
import { useFetch } from '@/composables/useFetch'
const { getData, data } = useFetch()
getData()

const years = computed(() => {
  const uniqueYears = new Set()
  data.value.filter((i) => {
    if (!uniqueYears.has(i.any)) {
      uniqueYears.add(i.any)
      return true
    }
    return false
  })
  return uniqueYears
})
</script>
<template>
  <h2>Anys</h2>
  <ul>
    <li v-for="year in years" :key="year">
      <router-link
        :to="{
          name: 'anyDetall',
          params: { anyDetall: year },
        }"
      >
        {{ year }}
      </router-link>
    </li>
  </ul>
</template>
