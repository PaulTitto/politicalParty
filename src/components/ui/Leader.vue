<template>
  <div>
    <div class="container-leader w-full mt-16">
      <div class="flex-container">
        <div class="photo    md:mx-20 lg:mx mx-auto mt-10">
          <img src="../../assets/img/PaulTitto.png" class="photo-right" alt="">
        </div>
        <div class="content mt-10 ">
          <div class="title-leader max-w-sm md:mx-20 lg:mx-20 mx-auto mb-8">
            <h1 class="text-blue-300">Meet Paul Titto</h1>
            <p>Leader of the Liberal Democrats</p>
          </div>

          <div class="title-bio max-w-sm md:mx-20 lg:mx-20 mx-auto mb-8">
            <p>
              Paul Titto is a Student, a Friend, and a carer. He is the MP for Kingston and Surbiton and Leader of the Liberal Democrats.
            </p>
            <p>
              It is Ed’s experience of caring that drives much of his politics, and motivates his tireless campaigning for a fair deal.
            </p>
          </div>

          <div class="learn-title max-w-sm md:mx-20 lg:mx-20 mx-auto mb-8">
            <a href="#" class="text-blue-300">Learn more about Paul Titto</a>
            <h1 class="text-2xl mt-5 font-semibold mb-5">Our people</h1>
            <p>Meet our MPs, representatives, and candidates.</p>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
}
.photo{
  width: 50%;
}

@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;
  }

  .photo img {
    width: 100%; /* Adjust the width as needed */
  }

  .photo-right {
    position: relative; /* Change to relative for mobile */
    right: auto; /* Remove right positioning for mobile */
    top: auto; /* Remove top positioning for mobile */
  }
}

.title-bio p {
  padding-bottom: 20px;
}

.title-leader h1 {
  font-size: 2rem;
  font-weight: bold;
  position: relative;
}

.title-leader p {
  font-size: 1.25rem;
  font-weight: bold;
}

.learn-title a {
  color: #3498db; /* Use your desired link color */
  text-decoration: underline;
}

.container-leader {
  position: relative;
  color: white;
  background-color: #16253b;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}
</style>
