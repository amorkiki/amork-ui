<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Amorkwoo's UI</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/icon">Icon</RouterLink>
        <RouterLink to="/button">Button</RouterLink>
        <RouterLink to="/switch">Switch</RouterLink>
        <RouterLink to="/select">Select</RouterLink>
        <RouterLink to="/dialog">Dialog</RouterLink>
        <RouterLink to="/tooltip">Tooltip</RouterLink>
      </nav>
    </div>
  </header>
  <main> <RouterView /></main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
main{
  min-height:90vh;
}

nav {
  width: 110%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-end;
    flex-wrap: wrap;
  }

  nav {
    text-align: right;
    margin-right: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
