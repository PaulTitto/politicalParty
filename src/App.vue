<script setup>

import Navbar from '@/components/ui/Navbar.vue';
import Footer from '@/components/ui/Footer.vue';

import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    
    <Navbar />
    

    
  </header>
  


  <RouterView />
  <footer>
    <Footer/>
  </footer>
</template>
