<template>
    <section class="py-12 bg-gray-100">
      <h2 class="text-3xl font-bold text-blue-500 mb-6 text-center">
          Browse Apartments
        </h2>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="w-full h-48 object-cover" src="./../assets/modern.jpg" alt="Apartment 1">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Modern Apartment</h2>
              <p class="text-gray-600">A stylish apartment with modern amenities and a beautiful view.</p>
              <RouterLink
              to="/apartments/1"
              class="inline-block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Read More
            </RouterLink>
            </div>
          </div>
  
          <!-- Card 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="w-full h-48 object-cover" src="./../assets/luxury.jpg" alt="Apartment 2">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Luxury Living</h2>
              <p class="text-gray-600">Experience luxury living in a spacious and elegant apartment.</p>
              <RouterLink
              to="/apartments/2"
              class="inline-block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Read More
            </RouterLink>
            </div>
          </div>
  
          <!-- Card 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="w-full h-48 object-cover" src="./../assets/cozy.jpg" alt="Apartment 3">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Cozy Retreat</h2>
              <p class="text-gray-600">A cozy and comfortable apartment perfect for relaxation.</p>
              <RouterLink
              to="/apartments/3"
              class="inline-block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Read More
            </RouterLink>
            </div>
          </div>
  
          <!-- Card 4 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="w-full h-48 object-cover" src="./../assets/oasis.jpg" alt="Apartment 4">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Urban Oasis</h2>
              <p class="text-gray-600">An urban apartment with all the conveniences of city living.</p>
              <RouterLink
              to="/apartments/4"
              class="inline-block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Read More
            </RouterLink>
            </div>
          </div>
  
          <!-- Card 5 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" alt="Apartment 5">
            <div class="p-5">
              <h2 class="text-xl font-semibold mb-2">Family Friendly</h2>
              <p class="text-gray-600">A spacious apartment ideal for families with children.</p>
              <RouterLink
              to="/apartments/3"
              class="inline-block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Read More
            </RouterLink>
            </div>
          </div>
  
          <!-- Card 6 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="w-full h-48 object-cover" src="./../assets/serene.jpg" alt="Apartment 6">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Serene Escape</h2>
              <p class="text-gray-600">A serene apartment offering peace and tranquility.</p>
              <RouterLink
              to="/apartments/6"
              class="inline-block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Read More
            </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  