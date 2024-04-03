<template>
  <main>
    <div class="grid">
      <div>
        <h2>Ballkönigin</h2>
        <GenderRanking :gender="'f'"/>
      </div>
      <div>
        <h2>Ballkönig</h2>
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
  gap: 20px;
}
</style>
