<template>
  <main>
    <div class="padtop">
      <h1><span class="highlightheading">Ballkönigin</span></h1>
      <GenderRanking :gender="'f'"/>
    </div>
  </main>
</template>
 
<script setup lang="ts">
import GenderRanking from '../components/GenderRanking.vue';
</script>