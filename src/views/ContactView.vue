<template>
    <div class="header">
        <img class="responsive-image" src="../assets/img/BE-Web-Contact.png" alt="">
    </div>
    <div class="w-full bg-gray">
        <div class="max-w-4xl mx-auto mt-5 p-6 bg-gray rounded-md">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <form class="grid grid-cols-2 gap-4">
                <div class="col-span-2 mb-4">
                    <textarea id="message" name="message" rows="2" class="textarea-message w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Message"></textarea>
                    <input type="checkbox" id="checkbox" class="mr-2">
                    <label class="" for="checkbox">Don't post this publicly</label>
                </div>
                <div class="col-span-1 mb-4 relative">
                  <input type="text" id="first_name" name="first_name" class=" w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" style="height: 60px; padding-left:30px" />
                  <label for="first_name" class="font-bold  absolute px-4 pointer-events-none transition-all duration-300" style="top: 0.5rem; left: 1rem;" id="first_name_label">First Name*</label>
              </div>
              
              <div class="col-span-1 mb-4 relative">
                <input type="text" id="first_name" name="first_name" class=" w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" style="height: 60px; padding-left:30px" />
                <label for="first_name" class="font-bold  absolute px-4 pointer-events-none transition-all duration-300" style="top: 0.5rem; left: 1rem;" id="first_name_label">First Name*</label>
            </div>
            <div class="col-span-1 mb-4 relative">
              <input type="text" id="first_name" name="first_name" class=" w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" style="height: 60px; padding-left:30px" />
              <label for="first_name" class="font-bold  absolute px-4 pointer-events-none transition-all duration-300" style="top: 0.5rem; left: 1rem;" id="first_name_label">First Name*</label>
          </div>
          <div class="col-span-1 mb-4 relative">
            <input type="text" id="first_name" name="first_name" class=" w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" style="height: 60px; padding-left:30px" />
            <label for="first_name" class="font-bold  absolute px-4 pointer-events-none transition-all duration-300" style="top: 0.5rem; left: 1rem;" id="first_name_label">First Name*</label>
        </div>
              <div class="col-span-2 text-center">
                  <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
              </div>
                <div class="col-span-2 mb-4">
                    <textarea id="message" name="message" rows="2" class="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Address (Street, City, Region, Postcode)"></textarea>
                    <input type="checkbox" id="checkbox" class="mr-2">
                    <label class="" for="checkbox">Don't post this publicly</label>
                </div>
            </form>
          </div>
    </div>
</template>

<style scoped>


#first_name:focus + #first_name_label,
#first_name:valid + #first_name_label:hover {
  top: 0.1rem;
  font-size: 0.60rem;
  color: #555;
}

#last_name:focus + #last_name_label,
#last_name:valid + #last_name_label:hover {
        top: 0.1rem;
        font-size: 0.5rem;
        color: #555;
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