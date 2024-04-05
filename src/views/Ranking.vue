<template>
  <main>
    <div class="grid padtop">
      <div>
        <span><img src="../assets/tiara.svg" style="height: calc(70px + 5vh); padding-left: 50px; margin-bottom: -40px;"></span>
        <h1>
          <span class="highlightheading">Ballkönigin</span>
        </h1>
        <GenderRanking :gender="'f'"/>
      </div>
      <div>
        <span><img src="../assets/crown-svgrepo-com.svg" style="height: calc(70px + 5vh); padding-left: 34px; margin-bottom: -40px;"></span>
        <h1>
          <span class="highlightheading">Ballkönig</span>
        </h1>
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
  gap: calc(15px + 5vw);
}
</style>