<script setup>
import { ref } from 'vue'

let quiz = ref([]);

fetch('http://localhost:3000/quiz/1')
  .then(response => response.json())
  .then(data => quiz.value = data)


let questions = ref([]);

fetch('http://localhost:3000/questions')
  .then(responses => responses.json())
  .then(data => questions.value = data)

let reponses = ref([]);

fetch('http://localhost:3000/reponses')
  .then(responses => responses.json())
  .then(data => reponses.value = data)

</script>

<template>
  <h1>{{ quiz.titre }}</h1>
    <div class="quiz-container">
        <ul v-for="question in questions" :key="question.id">
          <li v-if="question.id_quiz == 1">
            <p>{{ question.contenu }}</p>
            <div>
                <ul v-for="reponse in reponses" :key="reponse.id">
                  <li v-if="reponse.id_question == question.id">
                      {{ reponse.reponse }}
                  </li>
                </ul>
            </div>
          </li>
        </ul>
    </div>
</template>

<style scoped>
.quiz-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #42b883, #2c3e50);
}
</style>