<template>
  <h1>{{ student.name }} {{ student.surname }}</h1>
  <form>
    <div class="form-group">
      <label for="green">Grün:</label>
      <input type="number" id="green" name="green" v-model="green" class="form-control" />
    </div>
    <div class="form-group">
      <label for="gold">Gold:</label>
      <input type="number" id="gold" name="gold" v-model="gold" class="form-control" />
    </div>
    <div>
      Preis: {{ (green * Number(route.params.green_price)) + (gold * Number(route.params.gold_price)) }} €
    </div>
    <button type="button" class="btn btn-secondary" @click="back">Zurück</button>
    <button type="submit" class="btn btn-primary" @click="save">Speichern</button>
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
  await axios.put(`http://${String(window.location.hostname)}:5001/students/${route.params.id}`, student.value);
};

const fetchStudent = async () => {
  const response = await axios.get(`http://${String(window.location.hostname)}:5001/students/${route.params.id}`);
  student.value = response.data;
};

const back = () => {
  router.push({ name: 'points' });
};

onMounted(() => {
  fetchStudent();
});
</script>
