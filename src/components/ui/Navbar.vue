<template>
  <div class="relative">
    <div class="navbar sticky top-0">
      <div class="logo-container">
        <div class="logo">
          <img src="../../assets/img/icon.png" alt="The Blue Tree Party Logo">
        </div>
        <div class="party-name">The Blue Tree Party</div>
      </div>
      <div class="menu" :class="{'active': isMenuOpen}">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li class="dropdown">
            <!-- <a href="#">About ▼</a> -->
            <RouterLink to="#" class="m-4 pointer-events-none">About ▼</RouterLink>
            <div class="dropdown-content">
              <ul>
                <li><RouterLink to="/about">About</RouterLink></li>
                <li><RouterLink to="/latest_news">News</RouterLink></li>
                <li><RouterLink to="/history">History</RouterLink></li>
              </ul>
            </div>
          </li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      <div class="menu-toggle" id="mobile-menu" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false); 

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>



<style scoped>

.logo img{
  width: 20%;
  height: 20%;
}
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

.logo-container {
  display: flex; /* This will ensure the logo and party name appear side by side */
  align-items: center; /* Vertically align them in the middle */
}

.logo {
  margin-right: 0px; /* Add some spacing between the logo and party name */
}

.party-name {
  position: absolute;
  padding-left: 70px;
  font-size: 16px; 
  font-weight: 500;
  color: white; 
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
  padding-top: 2px;
  display: none;
  position: absolute;
  top: 100%;  /* Position it right below the dropdown menu item */
  left: 0;    /* Align it with the left side of the dropdown menu item */
  background-color: #333;
  min-width: 150px;
  z-index: 1;
}

.menu ul li.dropdown .dropdown-content ul li {
  margin: 20px 0px;
}

.menu ul li.dropdown:hover .dropdown-content {
  display: block;
}


.menu ul li.dropdown .dropdown-content ul li:not(:last-child) {
  margin-bottom: 20px;
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

.menu.active {
  display: flex;
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
    order: 1; 
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



