<template>
  <div>
    <header class="bg-red-500 flex items-center justify-center header">
      <nav class="bg-red-500 text-white">
        <div class="container mx-auto py-4">
          <ul class="flex space-x-4">
            <li class="text-white">
              <RouterLink to="/" exact class="router-link" active-class="active-router-link">Home</RouterLink>
              <RouterLink to="/about" exact class="router-link" active-class="active-router-link">About</RouterLink>
              <RouterLink to="/contact" exact class="router-link" active-class="active-router-link">Contact</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header{
  height: 100px;
}

.router-link {
  margin-right: 10px; /* Adjust the margin as needed */
}

.active-router-link {
  border-bottom: 2px solid white;
}
</style>
