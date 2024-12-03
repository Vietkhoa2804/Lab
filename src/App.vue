<script setup>
import { useRouter } from 'vue-router';
import Login from "./labs/Lab7/Bai3.vue";

const router = useRouter();
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Trang chủ</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container mt-4">
      <Login />
    </div>
    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
