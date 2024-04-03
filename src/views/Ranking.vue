<template>
  <main>
    <div class="grid">
      <div>
        <h1><span class="highlight">Ballkönigin</span></h1>
        <GenderRanking :gender="'f'"/>
      </div>
      <div>
        <h1><span class="highlight">Ballkönig</span></h1>
        <GenderRanking :gender="'m'"/>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import GenderRanking from '../components/GenderRanking.vue';
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(20px + 5vh);
}
</style>
