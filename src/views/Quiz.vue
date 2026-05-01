<script setup>
import { ref } from 'vue'

let quiz = ref([]);

fetch('http://localhost:8100/quiz/1')
  .then(response => response.json())
  .then(data => quiz.value = data)


let questions = ref([]);

fetch('http://localhost:8100/questions')
  .then(responses => responses.json())
  .then(data => questions.value = data)

let reponses = ref([]);

fetch('http://localhost:8100/reponses')
  .then(responses => responses.json())
  .then(data => reponses.value = data)

</script>

<template>
  <div class="quiz-container">

    <div class="quiz-card">

      <h1>{{ quiz.titre }}</h1>

      <div v-for="question in questions" :key="question.id">

        <!-- filtre quiz -->
        <div v-if="question.id_quiz == 1" class="question-block">

          <p class="question">{{ question.contenu }}</p>

          <div class="reponses">
            <div
              v-for="reponse in reponses"
              :key="reponse.id"
            >
              <div v-if="reponse.id_question == question.id" class="reponse">
                {{ reponse.reponse }}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.quiz-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #42b883, #2c3e50);
  padding: 20px;
}

.quiz-card {
  background: white;
  padding: 35px;
  border-radius: 16px;
  text-align: center;
  width: 100%;
  max-width: 600px;
}

h1 {
  margin-bottom: 20px;
  color: #2c3e50;
}

.question-block {
  margin-bottom: 25px;
}

.question {
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.reponse {
  background: #f3f3f3;
  margin: 5px 0;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.reponse:hover {
  background: #42b883;
  color: white;
}
</style>