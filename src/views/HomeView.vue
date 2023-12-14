<template>
  <div class="mx-40 mt-10">
    <h1 class="text-2xl font-bold text-center">News</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div class="flex flex-wrap -mx-4 card-container">
        <div v-for="article in jsonData.articles" :key="article.source.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div class="card-news bg-white p-4 rounded-md shadow-md">
            <div class="card-header mb-4">
              <h2 class="text-l font-semibold">{{ truncateTitle(article.title) }}</h2>
            </div>
            <div class="card-image-container mb-4">
              <a :href="article.url" target="_blank" rel="noopener noreferrer">
                <img :src="article.urlToImage" alt="Gambar Berita" class="card-image rounded-md" />
              </a>
            </div>
            <div class="card-description">
              <p class="text-gray-700">{{ truncateDescription(article.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>

.card-container{

}
.card-image-container {
  height: 100px; 
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 0.25rem; 
}
.card-description {
  overflow: hidden;
}

</style>

<script setup>
import jsonData from '../assets/json/news.json'


// import { useFetch } from '@/composable/useFetch.js';
// const { data, loading, error } = useFetch('https://newsapi.org/v2/everything?q="brexitparty"&language=en&from=2023-11-13&sortBy=publishedAt&apiKey=68db66d6c4fa4fcfbd5c8bbd70648bef');

const truncateDescription = (description) => {
  return description.length > 100 ? `${description.slice(0, 100)}...` : description;
};

const truncateTitle = (title) => {
  return title.length > 50 ? `${title.slice(0, 50)}...` : title;
};
</script>
