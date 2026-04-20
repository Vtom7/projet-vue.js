<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import QuizCard from '../components/QuizCard.vue'

const router = useRouter()

// 🎧 10 QUESTIONS COMPLETES
const questions = [
  {
    question: "Qui chante 'Formidable' ?",
    answers: ["Stromae", "Orelsan", "Dadju"],
    correct: "Stromae"
  },
  {
    question: "Qui chante 'Papaoutai' ?",
    answers: ["Stromae", "Gims", "Soprano"],
    correct: "Stromae"
  },
  {
    question: "Qui a chanté 'Djadja' ?",
    answers: ["Aya Nakamura", "Niska", "Indila"],
    correct: "Aya Nakamura"
  },
  {
    question: "Quel artiste a sorti l’album 'Civilisation' ?",
    answers: ["Orelsan", "Nekfeu", "Damso"],
    correct: "Orelsan"
  },
  {
    question: "Qui chante 'Balance ton quoi' ?",
    answers: ["Angèle", "Clara Luciani", "Zazie"],
    correct: "Angèle"
  },
  {
    question: "Qui chante 'Dernière danse' ?",
    answers: ["Indila", "Zaho", "Amel Bent"],
    correct: "Indila"
  },
  {
    question: "Quel groupe chante 'L’Aventurier' ?",
    answers: ["Indochine", "Téléphone", "Noir Désir"],
    correct: "Indochine"
  },
  {
    question: "Qui chante 'Je te promets' ?",
    answers: ["Johnny Hallyday", "Eddy Mitchell", "Florent Pagny"],
    correct: "Johnny Hallyday"
  },
  {
    question: "Quel rappeur chante 'La fête est finie' ?",
    answers: ["Orelsan", "Booba", "PNL"],
    correct: "Orelsan"
  },
  {
    question: "Qui chante 'La Bohème' ?",
    answers: ["Charles Aznavour", "Joe Dassin", "Serge Lama"],
    correct: "Charles Aznavour"
  }
]

const currentIndex = ref(0)
const score = ref(0)
const answered = ref(false)

function answer(selected) {
  if (answered.value) return

  answered.value = true

  if (selected === questions[currentIndex.value].correct) {
    score.value++
  }

  setTimeout(() => {
    currentIndex.value++
    answered.value = false

    if (currentIndex.value >= questions.length) {
      router.push({
        path: '/result',
        query: {
          score: score.value,
          total: questions.length
        }
      })
    }
  }, 600)
}
</script>

<template>
  <div class="quiz-container">
    <QuizCard
      v-if="questions[currentIndex]"
      :question="questions[currentIndex]"
      :index="currentIndex"
      :total="questions.length"
      :answered="answered"
      @answer="answer"
    />
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