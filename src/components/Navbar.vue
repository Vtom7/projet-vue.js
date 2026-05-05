<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const isLoggedIn = computed(() => {
  return !!localStorage.getItem('token')
})

function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">🎵 Music Quiz</div>

      <nav class="links">
        <RouterLink to="/" class="link">Accueil</RouterLink>
        <RouterLink to="/quiz" class="link">Quiz</RouterLink>
        <RouterLink to="/result" class="link">Résultat</RouterLink>

        <!-- Auth -->
        <RouterLink v-if="!isLoggedIn" to="/login" class="link">Connexion</RouterLink>
        <RouterLink v-if="!isLoggedIn" to="/register" class="link">Inscription</RouterLink>

        <button v-if="isLoggedIn" @click="logout" class="link btn-logout">
          Déconnexion
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(10px);
  color: white;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 18px;
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
  background: transparent;
  border: none;
  cursor: pointer;
}

.link:hover {
  background: rgba(255,255,255,0.1);
  color: white;
}

.router-link-active {
  background: #42b883;
  color: white;
}

.btn-logout {
  color: #ff6b6b;
}
</style>