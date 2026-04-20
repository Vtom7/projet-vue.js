<script setup>
defineProps({
  question: Object,
  index: Number,
  total: Number,
  answered: Boolean
})

const emit = defineEmits(['answer'])
</script>

<template>
  <div class="quiz-card">
    <h2>🎵 Quiz Musical</h2>

    <p class="progress">
      Question {{ index + 1 }} / {{ total }}
    </p>

    <h3 class="question">
      {{ question.question }}
    </h3>

    <div class="answers">
      <button
        v-for="(a, i) in question.answers"
        :key="i"
        @click="emit('answer', a)"
        :disabled="answered"
      >
        {{ a }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.quiz-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  text-align: center;
}

.progress {
  color: #777;
}

.answers {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #42b883;
  color: white;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
}
</style>