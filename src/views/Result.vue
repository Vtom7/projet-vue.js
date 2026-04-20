<script setup>
import { useRoute } from 'vue-router'
import ResultCard from '../components/ResultCard.vue'

const route = useRoute()

const score = Number(route.query.score) || 0
const total = Number(route.query.total) || 0
const percentage = total ? Math.round((score / total) * 100) : 0

function getRank(score) {
  const ranks = { 10:"A+",9:"A",8:"B+",7:"B",6:"C+",5:"C" }
  return ranks[score] || "F"
}

function getMessage() {
  if (score === total) return "🔥 Parfait !"
  if (score >= 6) return "👍 Bon niveau !"
  return "💀 Continue à t'entraîner"
}
</script>

<template>
  <div class="result-container">
    <ResultCard
      :score="score"
      :total="total"
      :percentage="percentage"
      :rank="getRank(score)"
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