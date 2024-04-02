<template>
  <table>
    <thead>
      <tr>
        <th>Platz</th>
        <th>Maturant</th>
        <th>Punkte</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ students.indexOf(student) + 1 }}.</td>
        <td>{{ student.name }} {{ student.surname }}</td>
        <td>{{ student.points }}</td>
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

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f0f0f0;
}

td:first-child {
  text-align: center;
}

td:last-child {
  text-align: right;
}
</style>