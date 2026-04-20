<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">🎵 Music Quiz</div>

      <nav class="links">
        <RouterLink to="/" class="link">Accueil</RouterLink>
        <RouterLink to="/quiz" class="link">Quiz</RouterLink>
        <RouterLink to="/result" class="link">Résultat</RouterLink>
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

  box-sizing: border-box;
}

/* Contenu centré et bien contenu */
.container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  font-weight: bold;
  font-size: 18px;
}

/* Liens */
.links {
  display: flex;
  gap: 12px;
}

/* Style des liens */
.link {
  color: #ccc;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 8px;
  white-space: nowrap;
}

.link:hover {
  background: rgba(255,255,255,0.1);
  color: white;
}

/* Lien actif */
.link.router-link-active {
  background: #42b883;
  color: white;
}

/* Responsive (petits écrans) */
@media (max-width: 600px) {
  .links {
    gap: 6px;
  }

  .link {
    padding: 5px 8px;
    font-size: 14px;
  }
}
</style>