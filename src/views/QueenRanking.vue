<template>
  <main>
    <div>
      <h2>Ballkönigin</h2>
      <GenderRanking :gender="'f'"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import GenderRanking from '../components/GenderRanking.vue';
</script>
