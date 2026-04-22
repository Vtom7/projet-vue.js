<script setup>
import { ref } from 'vue'

let quiz = ref([]);

fetch('http://localhost:3000/quiz')
  .then(response => response.json())
  .then(data => quiz.value = data)


let question = ref([]);

fetch('http://localhost:3000/questions')
  .then(response => response.json())
  .then(data => question.value = data)

let reponse = ref([]);

fetch('http://localhost:3000/reponses')
  .then(response => response.json())
  .then(data => reponse.value = data)


</script>

<template>
    <div>
        <ul>
        <li v-for="quiz in quiz" :key="quiz.id">
            {{ quiz.titre }}
        </li>
        </ul>
    </div>
    <div>
        <ul>
        <li v-for="question in question" :key="question.id">
            {{ question.contenu }}
        </li>
        </ul>
    </div>
    <div>
        <ul>
        <li v-for="reponse in reponse" :key="reponse.id">
            {{ reponse.reponse }}
        </li>
        </ul>
    </div>
</template>