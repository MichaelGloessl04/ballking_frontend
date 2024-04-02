<template>
  <main>
    <div>
      <h2>Ballkönig</h2>
      <GenderRanking :gender="'m'"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import GenderRanking from '../components/GenderRanking.vue';
</script>
