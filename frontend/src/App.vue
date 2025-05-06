<template>
<main >
    <!-- SECTION 1-->

  <form @submit.prevent="onSubmitClick">
    <article>
      <label for="email"></label>
      <input
        placeholder="Enter your email"
        type="email"
        id="email"
        v-model="email"
        class="input is-info"
      >
    </article>

    <article>
      <label for="password"></label>
      <input
        v-model="password"
        placeholder="Enter your password"
        type="password"
        id="password"
        class="input is-info"
      >
    </article>
    <section>
      <button type="submit" class="button is-info">Submit</button>
      <button type="reset" class="button is-info">Reset</button>
    </section>
  </form>
    <!-- SECTION 2-->

</main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email=ref("")
const password=ref("")


function onSubmitClick() {
  const data = {
    email: email.value,
    password: password.value
  }

  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }

  fetch("http://localhost:3000/api/v1/auth", req)
    .then(res => res.json())
    .then(res => console.log("Réponse backend :", res))
    .catch(err => console.error("Erreur backend :", err))
}

</script>
