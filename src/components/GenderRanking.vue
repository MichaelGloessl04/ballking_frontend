<template>
  <main>
    <StudentList :students="students"/>
  </main>
</template>

<script setup lang="ts">
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
  return students.sort((a, b) => b.points - a.points).slice(0, 10);
};

const fetchStudents = async () => {
  const response = await fetch(`http://localhost:5000/students/gender/${props.gender}`);
  students.value = createRanking(await response.json());
};

onMounted(fetchStudents);

setInterval(fetchStudents, 5000);
</script>
