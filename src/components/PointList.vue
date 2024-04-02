<template>
  <div class="container">
    <h2>Maturant/innen</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Maturant/in</th>
          <th>Punkte</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }} {{ student.surname }}</td>
          <td>{{ student.points }}</td>
          <td>
            <button class="btn btn-primary" @click="add(student.id)">Punkte Hinzufügen</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { watch, ref, onMounted, type Ref } from "vue";
import { type Student } from "../types/Student";
import { useRouter } from "vue-router";

const router = useRouter();

const students: Ref<Student[]> = ref<Student[]>([]);

const props = defineProps({
  search: String,
  green: {
    type: Number,
    required: true,
  },
  gold: {
    type: Number,
    required: true,
  },
  green_price: {
    type: Number,
    required: true,
  },
  gold_price: {
    type: Number,
    required: true,
  },
});

const fetchStudents = async () => {
  const response = await axios.get(`http://localhost:5000/students?search=${props.search}`);
  students.value = response.data;
};

const add = (id: number) => {
  router.push(
    { 
      name: "edit", 
      params: { 
        id: id,
        green: props.green,
        gold: props.gold,
        green_price: props.green_price,
        gold_price: props.gold_price,
      },
    }
  );
};

onMounted(() => {
  fetchStudents();
});

watch(() => props.search, () => {
  fetchStudents();
});
</script>
