<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="logo">🎵 Music Quiz</div>

    <nav class="links">
      <RouterLink to="/" class="link">Accueil</RouterLink>
      <RouterLink to="/quiz" class="link">Quiz</RouterLink>
      <RouterLink to="/result" class="link">Résultat</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(10px);
  color: white;
  z-index: 1000;
}

.links {
  display: flex;
  gap: 12px;
}

.link {
  color: #ccc;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 8px;
}

.link:hover {
  background: rgba(255,255,255,0.1);
  color: white;
}

.link.router-link-active {
  background: #42b883;
  color: white;
}
</style>