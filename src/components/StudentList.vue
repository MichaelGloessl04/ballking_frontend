<template>
  <table class="uk-table uk-width-xlarge uk-table-divider">
    <tbody>
      <tr v-for="(student, index) in students" :key="student.id" :class="index % 2 === 0 ? 'even-row' : 'odd-row'">
        <td>{{ student.name }} {{ student.surname }}</td>
      </tr>
      <tr>
        <td>Simon Schafferhofer</td>
      </tr>
      <tr>
        <td>Lennard Nussmüller Langer Name</td>
      </tr>
      <tr>
        <td>Name</td>
      </tr>
      <tr>
        <td>Name</td>
      </tr>
      <tr>
        <td>Name</td>
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
.table {
  width: 100%;
  border-collapse: collapse;
}
tr:nth-child(even) {
  background-color: #eaf4ea;
}
</style>