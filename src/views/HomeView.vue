<template>
  <div class="pt-16 mx-4 md:mx-10 lg:mx-20">
    <Mission/>
    <AppliMem/>
  </div>
  <Donate/>
  <div class="pt-16 mx-4 md:mx-10 lg:mx-20">
    <div class="max-w-4xl mx-auto">
      <div class="contact-home">
        Contact
      </div>
    </div>
    <Contact/>
  </div>
</template>



<script setup>
import Mission from '@/components/homeui/Mission.vue';
import Donate from '@/components/homeui/Donate.vue'
import AppliMem from '../components/homeui/AppliMem.vue';
import Contact from '@/components/ui/Contact.vue';
</script>

<style scoped>
.contact-home{
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
}
</style>
