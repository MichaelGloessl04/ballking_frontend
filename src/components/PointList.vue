<template>
  <div>
    <table class="uk-table uk-width-expand uk-table-divider">
      <thead>
        <tr>
          <th>Maturant/in</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id" @click="add(student.id)">
          <td>Simon Schafferhofer</td>
          <td>50</td>
          <td uk-icon="icon: pencil"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { watch, ref, onMounted, type Ref } from "vue";
import { type Student } from "../types/Student";
import { useRouter } from "vue-router";

const router = useRouter();

const students: Ref<Student[]> = ref<Student[]>([]);

const props = defineProps({
  search: String,
  green: {
    type: Number,
    required: true,
  },
  gold: {
    type: Number,
    required: true,
  },
  green_price: {
    type: Number,
    required: true,
  },
  gold_price: {
    type: Number,
    required: true,
  },
});

const fetchStudents = async () => {
  console.log(window.location.host)
  const response = await axios.get(`http://${String(window.location.hostname)}:5001/students?search=${props.search}`);
  students.value = response.data;
};

const add = (id: number) => {
  router.push(
    { 
      name: "edit", 
      params: { 
        id: id,
        green: props.green,
        gold: props.gold,
        green_price: props.green_price,
        gold_price: props.gold_price,
      },
    }
  );
};

onMounted(() => {
  fetchStudents();
});

watch(() => props.search, () => {
  fetchStudents();
});
</script>
