<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};


const isActiveLink = (routePath) =>{
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
    <nav class="bg-blue-600 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <RouterLink to="/" class="text-white font-bold text-xl">Tserembe Apartments</RouterLink>
            <div class="block lg:hidden">
                <button id="nav-toggle" class="text-white focus:outline-none" @click="toggleMenu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:items-center lg:space-x-6">
                <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-gray-500':'hover:bg-gray-400 hover:text-white','text-white','px-3','py-2','rounded-md']">Home</RouterLink>
                <RouterLink to="/about" :class="[isActiveLink('/about') ? 'bg-gray-500':'hover:bg-gray-400 hover:text-white','text-white','px-3','py-2','rounded-md']">About</RouterLink>
                <RouterLink to="/services" :class="[isActiveLink('/services') ? 'bg-gray-500':'hover:bg-gray-400 hover:text-white','text-white','px-3','py-2','rounded-md']">Services</RouterLink>
                <RouterLink to="/contact" :class="[isActiveLink('/contact') ? 'bg-gray-500':'hover:bg-gray-400 hover:text-white','text-white','px-3','py-2','rounded-md']">Contact</RouterLink>
            </div>
        </div>
        <div v-if="menuOpen" id="nav-menu" class="lg:hidden">
            <RouterLink to="/" class="block text-white px-4 py-2">Home</RouterLink>
            <RouterLink to="/about" class="block text-white px-4 py-2">About</RouterLink>
            <RouterLink to="/services" class="block text-white px-4 py-2">Services</RouterLink>
            <RouterLink to="/contact" class="block text-white px-4 py-2">Contact</RouterLink>
        </div>
    </nav>
</template>



