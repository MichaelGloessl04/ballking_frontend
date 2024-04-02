<template>
  <div class="conatiner">
    <h1>Punkte</h1>
    <form>
      <label for="search">Suche:</label>
      <input type="text" id="search" name="search" v-model="search" />
    </form>
    <h2>Übersicht</h2>
    <div>
      Grün: {{ green_price }} € -> {{ green }} Punkte
    </div>
    <div>
      Gold: {{ gold_price }} € -> {{ gold }} Punkte
    </div>
    <PointList :search="search" :green="green" :gold="gold" :green_price="green_price" :gold_price="gold_price"/>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref} from 'vue';
import PointList from '../components/PointList.vue'

const green: Ref<number> = ref(3);
const gold: Ref<number> = ref(5);

const green_price: Ref<number> = ref(3);
const gold_price: Ref<number> = ref(5);

const search: Ref<string> = ref('');
</script>
