<template>
  <main>
    <div class="padtop">
      <span><img src="../assets/tiara.svg" style="height: calc(70px + 5vh); padding-left: 50px; margin-bottom: -40px;"></span>
      <h1>
        <span class="highlightheading">Ballkönigin</span>
      </h1>
      <GenderRanking :gender="'f'"/>
    </div>
  </main>
</template>
 
<script setup lang="ts">
import GenderRanking from '../components/GenderRanking.vue';
</script>