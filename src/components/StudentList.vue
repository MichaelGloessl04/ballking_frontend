<template>
  <table>
    <thead>
      <tr>
        <th>Maturant/in</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.name }} {{ student.surname }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { type Student } from '../types/Student';

defineProps({
  students: {
    type: Array as () => Student[],
    required: true
  }
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 5px;
}

th {
  background-color: #f2f2f2;
}
</style>