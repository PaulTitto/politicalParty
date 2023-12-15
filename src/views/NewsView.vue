<template>
  <div class="pt-20 header">
    <div class="header w-full">
      <img
        class="responsive-image"
        src="../assets/img/Website-Latest-News.png"
        alt=""
      />
    </div>
    <News />
  </div>
</template>
<script setup>
import News from "../components/ui/News.vue";
</script>
<style scoped>
.header{
  margin-top: -6px;
}
</style>
