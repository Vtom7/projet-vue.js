<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const router = useRouter()

const isLoggedIn = computed(() => {
  return !!localStorage.getItem('token')
})

const mobileMenuOpen = ref(false)

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMenu() {
  mobileMenuOpen.value = false
}

function logout() {
  localStorage.removeItem('token')
  mobileMenuOpen.value = false
  router.push('/login')
}
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">🎵 Music Quiz</div>

      <!-- Burger -->
      <button class="burger" @click="toggleMenu">
        ☰
      </button>

      <!-- Navigation -->
      <nav :class="['links', { open: mobileMenuOpen }]">
        <RouterLink to="/" class="link" @click="closeMenu">
          Accueil
        </RouterLink>

        <RouterLink to="/quiz" class="link" @click="closeMenu">
          Quiz
        </RouterLink>

        <RouterLink to="/result" class="link" @click="closeMenu">
          Résultat
        </RouterLink>

        <!-- Auth -->
        <RouterLink
          v-if="!isLoggedIn"
          to="/login"
          class="link"
          @click="closeMenu"
        >
          Connexion
        </RouterLink>

        <RouterLink
          v-if="!isLoggedIn"
          to="/register"
          class="link"
          @click="closeMenu"
        >
          Inscription
        </RouterLink>

        <button
          v-if="isLoggedIn"
          @click="logout"
          class="link btn-logout"
        >
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
  border-bottom: 1px solid rgba(255,255,255,0.08);
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

/* NAV */
.links {
  display: flex;
  gap: 12px;
  align-items: center;
}

.link {
  color: #ccc;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
  font-size: 14px;
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

/* BURGER */
.burger {
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}

/* MOBILE */
@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .links {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(20, 20, 20, 0.98);

    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    gap: 10px;

    max-height: 0;
    overflow: hidden;

    opacity: 0;
    transition:
      max-height 0.3s ease,
      opacity 0.3s ease;
  }

  .links.open {
    max-height: 500px;
    opacity: 1;
  }

  .link {
    width: 100%;
  }
}
</style>