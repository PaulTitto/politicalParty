<template>
  <div class="relative">
    
      <div class="navbar sticky top-0">
        <div class="logo">Logo</div>
        <div class="menu">
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="dropdown">
              <a href="#">About ▼</a>
              <div class="dropdown-content">
                <ul>
                  <li><RouterLink to="/about" >About</RouterLink></li>
                </ul>
                <ul>
                  <li><RouterLink to="/about" >About</RouterLink></li>
                </ul>
                
              </div>
            </li>
            <li><RouterLink to="/contact" exact class="router-link" active-class="active-router-link">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="menu-toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <!-- <nav class="bg-red-500 text-white">
        <div class="container mx-auto py-4">
          <ul class="flex space-x-4 pt-3">
            <li class="text-white">
              
              
              <RouterLink to="/latest_news" exact class="router-link" active-class="active-router-link">News</RouterLink>
              
            </li>
          </ul>
        </div>
      </nav> -->
   
   
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

</script>



<style scoped>


.router-link {
  margin-right: 10px; /* Adjust the margin as needed */
}

.active-router-link {
  border-bottom: 2px solid white;
}



body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.navbar {
  position: sticky;
  top: 0; /* Stick to the top of the viewport */
  z-index: 1000; /* Adjust as necessary; ensures the navbar stays above other content */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 24px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-start; 
}

.menu ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}
.menu ul li {
  margin-right: 20px;
  position: relative;
}

.menu ul li.dropdown .dropdown-content {
  display: none;
  position: absolute;
  
  top: 100%;  
  left: 0;    
  background-color: #333;
  min-width: 150px;
  z-index: 1;
}

.menu ul li.dropdown .dropdown-content li {
  margin-bottom: 20px;
}

.menu ul li.dropdown:hover .dropdown-content {
  display: block;
}

/* If you want to add space between dropdown items, adjust this margin-bottom */
.menu ul li.dropdown .dropdown-content ul li:not(:last-child) {
  margin-bottom: 10px;
}
.menu a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.menu a:hover {
  background-color: #555;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  margin: 3px;
  background-color: white;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .menu {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    text-align: right;
    width: 100%;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-toggle {
    order: 1; /* Move the toggle to the rightmost side */
  }

  .menu ul {
    flex-direction: column;
  }

  .menu ul li {
    margin: 15px 0;
  }

  .menu a {
    display: block;
  }

  .menu ul li.dropdown:hover .dropdown-content {
    display: block;
  }
}
</style>



