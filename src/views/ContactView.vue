<template>
    <div class="header">
        <img class="responsive-image" src="../assets/img/BE-Web-Contact.png" alt="">
    </div>
    <div class="w-full bg-gray">
        <div class="max-w-4xl mx-auto mt-5 p-6 bg-gray rounded-md">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <form class="grid grid-cols-2 gap-4">
                <div class="col-span-2 mb-4">
                    <textarea id="message" name="message" rows="2" class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Message"></textarea>
                    <input type="checkbox" id="checkbox" class="mr-2">
                    <label for="checkbox">Don't post this publicly</label>
                </div>
                <div class="col-span-1 mb-4">
                  <input type="text" id="first_name" name="first_name" class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 " placeholder="First name" />
                </div>
                <div class="col-span-1 mb-4">
                  <input type="text" id="last_name" name="last_name" class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Last name" />
                </div>
                <div class="col-span-1 mb-4">
                  <input type="text" id="email" name="email" class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Email" />
                </div>
                <div class="col-span-1 mb-4">
                  <input type="text" id="mobile_phone" name="mobile_phone" class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Mobile Phone" />
                </div>
                <div class="col-span-2 text-center">
                  <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                </div>
            </form>
          </div>
    </div>
</template>

<style scoped>

.header {
  max-width: 100%;
  margin: 0 auto; /* Center the container horizontally */
}

img {
  max-width: 100%; /* Make the image responsive */
  height: auto; /* Maintain the aspect ratio */
  display: block; /* Remove extra space below the image */
}


</style>