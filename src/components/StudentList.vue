<template>
  <table class="uk-table uk-table-middle uk-table-responsive uk-table-striped uk-width-expand">
    <thead>
      <tr>
        <th class="uk-table-expand"></th>
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
</style>