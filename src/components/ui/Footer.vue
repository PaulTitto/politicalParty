<template>
    <footer class="bg-white  p-4 h-24">
      <div class="container mx-auto">
        <ul class="flex space">
            <li class="text-black">
              <div class="col-span-2 mb-4">
                <RouterLink to="#" class="m-4 pointer-events-none">&copy; 2023 Your Company. All rights reserved.</RouterLink>
              </div>
              <div class="col-span-1 mb-4">
                <RouterLink to="#" class="m-4">Terms and Conditions</RouterLink>
              </div>
              <div class="col-span-1 mb-4">
                <RouterLink to="#" class="m-4">Privacy</RouterLink>
              </div>
            </li>
          </ul>
        
      </div>
    </footer>
  </template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
</script>