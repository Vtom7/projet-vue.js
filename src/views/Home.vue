<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home-container">

    <!-- HERO -->
    <section class="hero">
      <h1>🎵 Quiz Musical</h1>

      <p class="subtitle">
        Teste tes connaissances sur la musique et défie tes amis 🎧
      </p>

      <RouterLink to="/quiz">
        <button class="cta">Commencer le quiz</button>
      </RouterLink>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section">
      <h2>Comment ça marche ?</h2>

      <div class="grid">
        <div class="card">
          <h3>🎯 Réponds</h3>
          <p>Une série de questions musicales t’attend.</p>
        </div>

        <div class="card">
          <h3>⚡ Score</h3>
          <p>Chaque bonne réponse augmente ton score.</p>
        </div>

        <div class="card">
          <h3>🏆 Résultat</h3>
          <p>Découvre ton niveau musical final.</p>
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="section alt">
      <h2>Catégories possibles</h2>

      <div class="tags">
        <span>🎸 Rock</span>
        <span>🎤 Pop</span>
        <span>🎧 Rap</span>
        <span>🎹 Classique</span>
        <span>📀 Années 80</span>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section">
      <h2>Pourquoi jouer ?</h2>

      <ul class="list">
        <li>✔ Améliore ta culture musicale</li>
        <li>✔ Joue rapidement (moins de 2 minutes)</li>
        <li>✔ Parfait pour défier tes amis</li>
        <li>✔ Interface simple et fun</li>
      </ul>
    </section>

    <!-- FINAL CTA -->
    <section class="cta-section">
      <h2>Prêt à tester ton niveau ?</h2>

      <RouterLink to="/quiz">
        <button class="cta">Lancer le quiz 🚀</button>
      </RouterLink>
    </section>

  </div>
</template>

<style scoped>
.home-container {
  padding-top: 80px;
  padding-bottom: 60px;
  max-width: 900px;
  margin: auto;
}

/* HERO */
.hero {
  text-align: center;
  padding: 40px 20px;
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  margin-bottom: 25px;
}

.cta {
  padding: 12px 25px;
  border: none;
  background: #42b883;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.cta:hover {
  background: #369870;
}

/* SECTIONS */
.section {
  padding: 40px 20px;
  text-align: center;
}

.section.alt {
  background: #f5f5f5;
  border-radius: 12px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

/* TAGS */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
}

.tags span {
  background: #42b883;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}

/* LIST */
.list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.list li {
  margin: 10px 0;
  color: #444;
}

/* FINAL CTA */
.cta-section {
  text-align: center;
  padding: 50px 20px;
}

.cta-section h2 {
  margin-bottom: 20px;
}
</style>