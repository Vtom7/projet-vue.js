<script setup>
defineProps({
  score: Number,
  total: Number,
  percentage: Number,
  rank: String,
  message: String
})
</script>

<template>
  <div class="result-card">
    <h1>🏆 Résultat</h1>

    <div class="score">
      {{ score }} / {{ total }}
    </div>

    <div class="percentage">
      {{ percentage }}%
    </div>

    <div class="rank">
      Rang : <span>{{ rank }}</span>
    </div>

    <p class="message">
      {{ message }}
    </p>

    <div class="actions">
      <RouterLink to="/quiz" class="btn">🔁 Rejouer</RouterLink>
      <RouterLink to="/" class="btn secondary">🏠 Accueil</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.result-card {
  background: white;
  padding: 35px;
  border-radius: 16px;
  text-align: center;
  width: 100%;
  max-width: 420px;
}

.score {
  font-size: 40px;
  color: #42b883;
}

.rank span {
  color: #42b883;
  font-size: 24px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  background: #42b883;
  color: white;
  padding: 12px;
  border-radius: 10px;
  text-decoration: none;
}

.secondary {
  background: #eee;
  color: #333;
}
</style>