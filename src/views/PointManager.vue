<template>
  <div class="conatiner padlr padtop">
    <h1 class="highlightheading">Punktemanager</h1>
    <hr>
    <div class="uk-margin">
    <form class="uk-search uk-search-navbar">
        <span class="uk-search-icon-flip" uk-search-icon></span>
        <input class="uk-search-input" name="search" type="search" id="search" placeholder="Search" aria-label="Search" v-model="search">
    </form>
    </div>
    <hr>
    <h2 style="color: #d7d7d7;">Übersicht</h2>
    <div class="uk-text-bold lig">
      <span class="green">Grün:</span> {{ green_price }} € -> {{ green }} Punkte
    </div>
    <div class="uk-text-bold lig">
      <span class="gold">Gold:</span> {{ gold_price }} € -> {{ gold }} Punkte
    </div>
    <hr>
    <h2 style="color: #d7d7d7;">Maturant/in</h2>
    <PointList :search="search" :green="green" :gold="gold" :green_price="green_price" :gold_price="gold_price"/>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref} from 'vue';
import PointList from '../components/PointList.vue'

const green: Ref<number> = ref(1);
const gold: Ref<number> = ref(3);

const green_price: Ref<number> = ref(2);
const gold_price: Ref<number> = ref(5);

const search: Ref<string> = ref('');
</script>
