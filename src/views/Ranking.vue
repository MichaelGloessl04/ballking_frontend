<template>
  <main>
    <div class="grid">
      <div>
        <h2>Ballkönigin</h2>
        <StudentList :students="students_f"/>
      </div>
      <div>
        <h2>Ballkönig</h2>
        <StudentList :students="students_m"/>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import StudentList from '../components/StudentList.vue';
import { type Student } from '../types/Student';
import { onMounted, ref, type Ref } from 'vue';

const students_m: Ref<Student[]> = ref([]);
const students_f: Ref<Student[]> = ref([]);

const fetchStudents = async () => {
  const response = await fetch('http://localhost:5000/students');
  const students = await response.json();
  students_m.value = students.filter((student: Student) => student.gender === 'm');
  students_f.value = students.filter((student: Student) => student.gender === 'f');
};

onMounted(fetchStudents);
</script>

<style scoped>
main {
  margin: 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
