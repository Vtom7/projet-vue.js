<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

// --------------------
// CONFIG API
// --------------------
const API_URL = 'https://xxx.alwaysdata.net'

// --------------------
// LOGIN
// --------------------
async function login() {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.message || 'Erreur de connexion')
      return
    }

    // Sauvegarde du token
    localStorage.setItem('token', data.token)

    // Redirection
    router.push('/')

  } catch (err) {
    console.error(err)
    alert('Erreur serveur')
  }
}
</script>

<template>
  <div class="auth">
    <h1>Connexion</h1>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Mot de passe" />

    <button @click="login">Se connecter</button>

    <p>
      Pas encore de compte ?
      <router-link to="/register">S'inscrire</router-link>
    </p>
  </div>
</template>

<style scoped>
.auth {
  max-width: 400px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  padding: 10px;
  background: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}

button:hover {
  background: #36996f;
}
</style>