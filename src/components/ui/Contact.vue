<template>
      <div class="max-w-4xl mx-auto">
        <form class="grid grid-cols-2 gap-4">
          <div class="col-span-2 mb-4 relative">
            <input
              type="text"
              id="input"
              name="input"
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              style="height: 60px; padding-left: 30px"
            />
            <label
              for="input"
              class="font-bold absolute px-4 pointer-events-none transition-all duration-300"
              style="top: 0.5rem; left: 1rem"
              id="input_label"
              >Message</label
            >
          </div>
          <div class="checkbox-center col-span-2 text-center">
            <input type="checkbox" id="checkbox" class="mr-2" />
            <label class="" for="checkbox">Don't post this publicly</label>
          </div>
          <div class=" col-span-1 mb-4 relative">
            <input
              type="text"
              id="input"
              name="input"
              class="container-input w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              style="height: 60px; padding-left: 30px"
            />
            <label
              for="input"
              class="font-bold absolute px-4 pointer-events-none transition-all duration-300"
              style="top: 0.5rem; left: 1rem"
              id="input_label"
              >First Name*</label
            >
          </div>
  
          <div class=" col-span-1 mb-4 relative">
            <input
              type="text"
              id="input"
              name="input"
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              style="height: 60px; padding-left: 30px"
            />
            <label
              for="input"
              class="font-bold absolute px-4 pointer-events-none transition-all duration-300"
              style="top: 0.5rem; left: 1rem"
              id="input_label"
              >Last Name*</label
            >
          </div>
          <div class=" col-span-1 mb-4 relative">
            <input
              type="text"
              id="input"
              name="input"
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              style="height: 60px; padding-left: 30px"
            />
            <label
              for="input"
              class="font-bold absolute px-4 pointer-events-none transition-all duration-300"
              style="top: 0.5rem; left: 1rem"
              id="input_label"
              >Mobile Phone*</label
            >
          </div>
          <div class=" col-span-1 mb-4 relative">
            <input
              type="text"
              id="input"
              name="input"
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              style="height: 60px; padding-left: 30px"
            />
            <label
              for="input"
              class="font-bold absolute px-4 pointer-events-none transition-all duration-300"
              style="top: 0.5rem; left: 1rem"
              id="input_label"
              >Email*</label
            >
          </div>
          <div class="checkbox-center col-span-1 ">
            <input type="checkbox" id="checkbox" class="mr-2" />
            <label class="" for="checkbox">Send me text messages</label>
          </div>
          <div class="checkbox-center col-span-1">
            <input type="checkbox" id="checkbox" class="mr-2" />
            <label class="" for="checkbox">Send me email updates</label>
          </div>
          <div class="col-span-2 mb-4 relative">
            <input
            type="text"
            id="input"
            name="input"
            class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
            style="height: 60px; padding-left: 30px"
            />
            <label
            for="input"
            class="font-bold absolute px-4 pointer-events-none transition-all duration-300"
            style="top: 0.5rem; left: 1rem"
            id="input_label"
            >Address (Street, City, Region, Postcode)</label
            >
            <div class="col-span-2 text-center mt-5">
              <button
                type="submit"
                class="submit-message py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                <p> Send Message</p>
              </button>
            </div>
          </div>
        </form>
      </div>
      
</template>