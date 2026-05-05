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
// REGISTER
// --------------------
async function register() {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.message || 'Erreur lors de l’inscription')
      return
    }

    alert('Compte créé !')
    router.push('/login')

  } catch (err) {
    console.error(err)
    alert('Erreur serveur ou backend indisponible')
  }
}
</script>

<template>
  <form class="auth" @submit.prevent="register">
    <h1>Inscription</h1>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Mot de passe" />

    <button type="submit">Créer un compte</button>

    <p>
      Déjà un compte ?
      <router-link to="/login">Connexion</router-link>
    </p>
  </form>
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