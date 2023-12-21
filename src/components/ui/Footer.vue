<template>
  <footer class="bg-blue-600 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 class="text-xl mb-4">The Blue Tree Party</h2>
          <p class="text-sm title-footer">
            The Blue Tree Party is a political party that originated in the
            Indonesia. Founded in the early 21th century, the Blue Tree Party
            emerged as a major force in Indonesian politics, representing the
            interests of the working class and advocating for social democracy
            and progressive policies.
          </p>
        </div>

        <div class="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 class="text-lg mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" class="text-sm hover:text-gray-300">Home</a></li>
            <li><a href="#" class="text-sm hover:text-gray-300">About</a></li>
            <li>
              <a href="#" class="text-sm hover:text-gray-300">Services</a>
            </li>
            <li><a href="#" class="text-sm hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        <div class="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 class="text-lg mb-2">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-xl hover:text-gray-300"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" class="text-xl hover:text-gray-300"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="#" class="text-xl hover:text-gray-300"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="#" class="text-xl hover:text-gray-300"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>

        <div class="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 class="text-lg mb-2">Contact</h3>
          <p class="text-sm mb-2">123 Adi Sucipto, Karanganyar, City</p>
          <p class="text-sm">contact@bluparty.com</p>
        </div>
      </div>
    </div>
    <div class="bg-blue-700 py-4">
      <div class="container mx-auto text-center">
        <p class="text-sm">&copy; 2023 The Blue Tree Party.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>
<style scoped>
.title-footer {
  width: 80%;
  font-size: 12px;
}
</style>
