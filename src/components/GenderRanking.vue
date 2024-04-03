<template>
  <main>
    <StudentList :students="students"/>
  </main>
</template>

<script setup lang="ts">
import axios from 'axios';
import StudentList from '../components/StudentList.vue';
import { type Student } from '../types/Student';
import { onMounted, ref, type Ref } from 'vue';

const students: Ref<Student[]> = ref([]);

const props = defineProps({
    gender : {
        type: String,
        required: true
    }
});

const createRanking = (students: Student[]) => {
  return students.sort((a, b) => b.points - a.points).slice(0, 5);
};

const fetchStudents = async () => {
  const response = await axios.get(`http://localhost:5001/students/gender/${props.gender}`);
  students.value = createRanking(await response.data);
};

onMounted(fetchStudents);

setInterval(fetchStudents, 5000);
</script>
