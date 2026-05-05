<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// --------------------
// CONFIG API
// --------------------
const API_URL = 'https://xxx.alwaysdata.net'

// --------------------
// STATE
// --------------------
const quiz = ref({})
const questions = ref([])
const reponses = ref([])
const selectedAnswers = ref({})
const loading = ref(true)
const error = ref(null)

// --------------------
// TOKEN
// --------------------
function getToken() {
  return localStorage.getItem('token')
}

// --------------------
// FETCH DATA (AVEC JWT)
// --------------------
async function loadData() {
  try {
    loading.value = true
    error.value = null

    const token = getToken()

    if (!token) {
      throw new Error('Utilisateur non connecté (token manquant)')
    }

    const headers = {
      Authorization: `Bearer ${token}`
    }

    const [quizRes, questionsRes, reponsesRes] = await Promise.all([
      fetch(`${API_URL}/quiz/1`, { headers }),
      fetch(`${API_URL}/questions`, { headers }),
      fetch(`${API_URL}/reponses`, { headers })
    ])

    // --------------------
    // DEBUG ERREURS HTTP
    // --------------------
    if (!quizRes.ok || !questionsRes.ok || !reponsesRes.ok) {
      throw new Error(
        `API error:
        quiz=${quizRes.status}
        questions=${questionsRes.status}
        reponses=${reponsesRes.status}`
      )
    }

    // --------------------
    // JSON PARSING
    // --------------------
    quiz.value = await quizRes.json()
    questions.value = await questionsRes.json()
    reponses.value = await reponsesRes.json()

  } catch (err) {
    error.value = err.message
    console.error('Erreur API:', err)
  } finally {
    loading.value = false
  }
}

onMounted(loadData)

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
// SCORE
// --------------------
function calculateScore() {
  let score = 0

  filteredQuestions.value.forEach(q => {
    const selected = selectedAnswers.value[q.id]
    if (!selected) return

    const answer = reponses.value.find(
      r => r.id === selected && r.id_question === q.id
    )

    if (answer?.correct) {
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

      <!-- LOADING -->
      <p v-if="loading">Chargement...</p>

      <!-- ERROR -->
      <p v-if="error" class="error">
        {{ error }}
      </p>

      <!-- QUIZ -->
      <div v-if="!loading && !error">

        <h1>{{ quiz.titre }}</h1>

        <div
          v-for="question in filteredQuestions"
          :key="question.id"
          class="question-block"
        >

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

        <button class="validate-btn" @click="validateQuiz">
          Valider
        </button>

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

.error {
  color: red;
  margin-bottom: 10px;
  white-space: pre-line;
}
</style>