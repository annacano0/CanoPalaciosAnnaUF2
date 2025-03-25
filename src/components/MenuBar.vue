<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    <h1>Examen UF2</h1>
  </div>
  <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/anys">Beques</RouterLink>
  </nav>
</template>