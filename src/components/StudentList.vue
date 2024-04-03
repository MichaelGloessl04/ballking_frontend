<template>
  <table class="uk-table uk-width-xlarge uk-table-divider">
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
.table {
  width: 100%;
  border-collapse: collapse;
}
tr:nth-child(even) {
  background-color: #eaf4ea;
}
</style>