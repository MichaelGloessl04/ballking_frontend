<template>
  <main>
    <div class="padtop">
      <h1><span class="highlightheading">Ballkönig</span></h1>
      <GenderRanking :gender="'m'"/>
    </div>
  </main>
</template>
 
<script setup lang="ts">
import GenderRanking from '../components/GenderRanking.vue';
</script>