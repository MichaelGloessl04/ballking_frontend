<template>
  <form class="padtop" @submit.prevent="back">
    <h3 class="lig">{{ student.name }} {{ student.surname }} bearbeiten:</h3>
    <hr>
    <div class="uk-margin">
        <p class="mlig"><span class="green">Grüne</span> Sterne:</p>
        <div class="uk-inline">
            <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
            <input class="uk-input" type="number" name="green" v-model="green" placeholder="1">
        </div>
    </div>
    <div class="uk-margin">
        <p class="mlig"><span class="gold">Goldene</span> Sterne:</p>
        <div class="uk-inline">
            <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
            <input class="uk-input" type="number" name="gold" v-model="gold" placeholder="1">
        </div>
    </div>
    <div class="uk-text-large mlig">
      Preis: {{ (green * Number(route.params.green_price)) + (gold * Number(route.params.gold_price)) }} €
    </div>
    <hr>
    <button type="button" class="uk-button uk-button-danger uk-width-1-1 uk-margin-small-bottom" @click="back">Zurück</button>
    <br>
    <button type="submit" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" @click="save">Speichern</button>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { type Student } from '../types/Student';

const route = useRoute();
const router = useRouter();

const student: Ref<Student> = ref<Student>({
  id: 0,
  name: '',
  surname: '',
  gender: '',
  points: 0,
});
const green: Ref<number> = ref(0);
const gold: Ref<number> = ref(0);

const save = async () => {
  student.value.points += (green.value * Number(route.params.green)) + (gold.value * Number(route.params.gold));
  await axios.put(`/api/students/${route.params.id}`, student.value);
  back();
};

const fetchStudent = async () => {
  const response = await axios.get(`/api/students/${route.params.id}`);
  student.value = response.data;
};

const back = () => {
  router.push({ name: 'points' });
};

onMounted(() => {
  fetchStudent();
});
</script>
