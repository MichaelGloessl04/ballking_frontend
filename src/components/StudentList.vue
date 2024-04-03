<template>
  <table class="uk-table uk-table-middle uk-table-responsive uk-table-striped uk-width-expand">
    <thead>
      <tr>
        <th class="uk-table-expand">Platz</th>
        <th class="uk-table-expand">Maturant</th>
        <th class="uk-table-expand">Punkte</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ students.indexOf(student) + 1 }}.</td>
        <td>{{ student.name }} {{ student.surname }}</td>
        <td>{{ student.points }}</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Name</td>
        <td>100</td>
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