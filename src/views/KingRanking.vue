<template>
  <main>
    <div class="padtop">
      <span><img src="../assets/crown-svgrepo-com.svg" style="height: calc(70px + 5vh); padding-left: 34px; margin-bottom: -40px;"></span>
      <h1>
        <span class="highlightheading">Ballkönig</span>
      </h1>
      <GenderRanking :gender="'m'"/>
    </div>
  </main>
</template>
 
<script setup lang="ts">
import GenderRanking from '../components/GenderRanking.vue';
</script>