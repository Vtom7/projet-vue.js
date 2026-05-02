<script setup>
import { useRoute } from 'vue-router'
import ResultCard from '../components/ResultCard.vue'

const route = useRoute()

// --------------------
// DATA
// --------------------
const score = Number(route.query.score) || 0
const total = Number(route.query.total) || 0
const percentage = total ? Math.round((score / total) * 100) : 0

// --------------------
// RANK (corrigé)
// --------------------
function getRank(p) {
  if (p === 100) return "A+"
  if (p >= 80) return "A"
  if (p >= 70) return "B+"
  if (p >= 60) return "B"
  if (p >= 50) return "C+"
  if (p >= 40) return "C"
  return "F"
}

// --------------------
// MESSAGE
// --------------------
function getMessage() {
  if (total === 0) return "Aucune question 😅"
  if (score === total) return "🔥 Parfait !"
  if (percentage >= 50) return "👍 Bon niveau !"
  return "💀 Continue à t'entraîner"
}
</script>

<template>
  <div class="result-container">
    <ResultCard
      :score="score"
      :total="total"
      :percentage="percentage"
      :rank="getRank(percentage)"
      :message="getMessage()"
    />
  </div>
</template>

<style scoped>
.result-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #42b883, #2c3e50);
}
</style>