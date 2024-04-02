<template>
  <div class="conatiner">
    <h1>Point Manager</h1>
    <form>
      <label for="search">Search:</label>
      <input type="text" id="search" name="search" />
    </form>
    <PointList />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted } from 'vue';
import PointList from '../components/PointList.vue'

const fetchStudents = async () => {
  const response = await axios.get('http://localhost:5000/api/students/')
  console.log(response.data)
}

onMounted(() => {
  fetchStudents()
})
</script>
