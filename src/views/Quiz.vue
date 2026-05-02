<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const quiz = ref({})
const questions = ref([])
const reponses = ref([])
const selectedAnswers = ref({})

// --------------------
// FETCH (sans onMounted)
// --------------------
fetch('http://localhost:8100/quiz/1')
  .then(res => res.json())
  .then(data => quiz.value = data)

fetch('http://localhost:8100/questions')
  .then(res => res.json())
  .then(data => questions.value = data)

fetch('http://localhost:8100/reponses')
  .then(res => res.json())
  .then(data => reponses.value = data)

// --------------------
// QUESTIONS FILTRÉES
// --------------------
const filteredQuestions = computed(() =>
  questions.value.filter(q => q.id_quiz === quiz.value.id)
)

// --------------------
// SELECT ANSWER
// --------------------
function selectAnswer(questionId, reponseId) {
  selectedAnswers.value[questionId] = reponseId
}

// --------------------
// CALCUL SCORE
// --------------------
function calculateScore() {
  let score = 0

  filteredQuestions.value.forEach(q => {
    const selected = selectedAnswers.value[q.id]

    if (!selected) return

    const answer = reponses.value.find(
      r => r.id === selected && r.id_question === q.id
    )

    // ✅ correction ici : "correct"
    if (answer && answer.correct) {
      score++
    }
  })

  return score
}

// --------------------
// VALIDATION
// --------------------
function validateQuiz() {
  const score = calculateScore()
  const total = filteredQuestions.value.length

  router.push({
    path: '/result',
    query: { score, total }
  })
}
</script>

<template>
  <div class="quiz-container">
    <div class="quiz-card">

      <h1>{{ quiz.titre }}</h1>

      <div v-for="question in filteredQuestions" :key="question.id">

        <div class="question-block">
          <p class="question">{{ question.contenu }}</p>

          <div class="reponses">
            <div
              v-for="reponse in reponses.filter(r => r.id_question === question.id)"
              :key="reponse.id"
              class="reponse"
              :class="{ selected: selectedAnswers[question.id] === reponse.id }"
              @click="selectAnswer(question.id, reponse.id)"
            >
              {{ reponse.reponse }}
            </div>
          </div>
        </div>

      </div>

      <button class="validate-btn" @click="validateQuiz">
        Valider
      </button>

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

.reponse.selected {
  background: #42b883;
  color: white;
  border: 2px solid #2c3e50;
}

.validate-btn {
  margin-top: 20px;
  padding: 12px 20px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.validate-btn:hover {
  background: #42b883;
}
</style>