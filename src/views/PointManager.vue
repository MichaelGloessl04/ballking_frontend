<template>
  <div class="conatiner">
    <h1><span class="highlight highlightheading">Punkte</span></h1>
    <div class="uk-margin">
    <form class="uk-search uk-search-default">
        <span class="uk-search-icon-flip" uk-search-icon></span>
        <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search" v-model="search">
    </form>
    </div>
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
