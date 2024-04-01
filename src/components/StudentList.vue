<template>
    <ul>
        <li v-for="student in students" :key="student.id">
        {{ student.name }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { type Student } from '../types/Student';
import { onMounted, ref, type Ref } from 'vue';

const students: Ref<Array<Student>> = ref([]);

const updateStudents = async () => {
  const response = await fetch('http://localhost:80/students');
  students.value = await response.json();
};

onMounted(updateStudents);
</script>