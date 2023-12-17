<template>
  <div class="header pt-20">
    <img
      class="responsive-image"
      src="../assets/img/BE-Web-Contact.png"
      alt=""
    />
  </div>
  <div class="w-full bg-gray pt-3">
    <div class="max-w-4xl mx-auto p-6 bg-gray rounded-md">
    <Contact/>
  </div>
  </div>
</template>
<script setup>

import Contact from '@/components/ui/Contact.vue';
</script>


<style scoped>
.container-input{
  border: 1px solid #00B1DA;
}

#input:focus + #input_label,
#input:valid + #input_label:hover {
  top: 0.1rem;
  font-size: 0.6rem;
  color: #00B1DA;
}
.submit-message{
  margin-top: 20px;
  border-radius: 20px;
  width: 150px;
  color: #00B1DA;
}
.submit-message p{
  color: white;
  font-weight:bold ;
}

.checkbox-center {
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  max-width: 100%;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
