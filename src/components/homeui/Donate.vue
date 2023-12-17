<template>
  <div class="container-donate w-full">
    <h1>Donate</h1>
    <div class="max-w-4xl mx-auto">
      <p class="title-amount">Select an amount</p>
      <div class="flex flex-wrap max-auto ">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-3">
          <div class="flex items-center">
            <input
              type="radio"
              class="hidden"
            />
            <label
              for="donation"
              class="container-money cursor-pointer radio btn p-3 btn-color-2 bg-blue-500 hover:bg-blue-400"
              role="button"
            >
              <a href="#">$5</a>
            </label>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-3">
            <div class="flex items-center">
              <input
                type="radio"
                class="hidden"
              />
              <label
                for="donation"
                class="container-money cursor-pointer radio btn p-3 btn-color-2 bg-blue-500 hover:bg-blue-400"
                role="button"
              >
                <a href="#">$10</a>
              </label>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-3">
            <div class="flex items-center">
              <input
                type="radio"
                class="hidden"
              />
              <label
                for="donation"
                class="container-money cursor-pointer radio btn p-3 btn-color-2 bg-blue-500 hover:bg-blue-400"
                role="button"
              >
                <a href="#">$25</a>
              </label>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-3">
            <div class="flex items-center">
              <input
                type="radio"
                class="hidden"
              />
              <label
                for="donation"
                class="container-money cursor-pointer radio btn p-3 btn-color-2 bg-blue-500 hover:bg-blue-400"
                role="button"
              >
                <a href="#">$50</a>
              </label>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-3">
            <div class="flex items-center">
              <input
                type="radio"
                class="hidden"
              />
              <label
                for="donation"
                class="container-money cursor-pointer radio btn p-3 btn-color-2 bg-blue-500 hover:bg-blue-400"
                role="button"
              >
                <a href="#">$100</a>
              </label>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-3">
            <div class="flex items-center">
              <input
                type="radio"
                class="hidden"
              />
              <label
                for="donation"
                class="container-money cursor-pointer radio btn p-3 btn-color-2 bg-blue-500 hover:bg-blue-400"
                role="button"
              >
                <a href="#">$250</a>
              </label>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-3">
            <div class="flex items-center">
              <input
                type="radio"
                class="hidden"
              />
              <label
                for="donation"
                class="container-money cursor-pointer radio btn p-3 btn-color-2 bg-blue-500 hover:bg-blue-400"
                role="button"
              >
                <a href="#">$500</a>
              </label>
            </div>
          </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-money {
  width: 150px;
  border-radius: 50px;
  height: 80px;
  text-align: center;
  top: 10px;
  margin-top: 20px;
  font-size: 30px;
}

.container-donate {
  position: relative;
  color: white;
  background-color: #16253b;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container-donate h1 {
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  padding-top: 60px;
  margin-bottom: 20px;
}
.title-amount{
    margin-left: 20px;
    font-size: 25px;
    font-weight: bolder;
  }

@media only screen and (max-width: 640px) {
  .container-money {
    width: 100%;
  }
  
  
}
</style>
