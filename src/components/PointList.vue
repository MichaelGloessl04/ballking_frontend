<template>
  <div class="container">
    <h1>Point List</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Maturant</th>
          <th>Punkte</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }} {{ student.surname }}</td>
          <td>{{ student.points }}</td>
          <td>
            <router-link
              :to="{ name: 'edit', params: { id: student.id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, type Ref } from "vue";
import { type Student } from "../types/Student";

const students: Ref<Student[]> = ref<Student[]>([]);

const props = defineProps({
  search: String,
});

const fetchStudents = async () => {
  const response = await axios.get(`http://localhost:5000/students/?search=${props.search}`);
  students.value = response.data;
};

onMounted(() => {
  fetchStudents();
});
</script>
