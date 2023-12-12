<template>
    <div class="image-container">
        <img src="../assets/img/BE-Web-Contact.png" alt="Responsive Image">
      </div>
</template>

<style scoped>

.image-container {
    position: relative;
    width: 100%;
    text-align: center; /* Center the image horizontally */
  }
  
  /* Default style for larger screens */
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 612px) {
    img {
  max-width: 1140px;
    }
  }

</style>