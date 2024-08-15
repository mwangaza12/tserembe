<template>
    <div class="bg-gray-100 min-h-screen py-12">
  
      <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="apartment.image" alt="Apartment Image" class="w-full h-64 object-cover">
          <div class="p-6">
            <h2 class="text-3xl font-semibold mb-4">{{ apartment.title }}</h2>
            <p class="text-gray-600 mb-4">{{ apartment.description }}</p>
            <div class="flex flex-wrap gap-4">
              <div class="w-full md:w-1/2 lg:w-1/3">
                <h3 class="text-xl font-semibold mb-2">Features</h3>
                <ul class="list-disc list-inside text-gray-600">
                  <li v-for="feature in apartment.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3">
                <h3 class="text-xl font-semibold mb-2">Pricing</h3>
                <p class="text-gray-600">Price: ${{ apartment.price }} per month</p>
              </div>
            </div>
            <div class="mt-6">
              <RouterLink
                to="/apartments"
                class="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Back to Apartments
              </RouterLink>
            </div>
          </div>
        </div>
      </main>

    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const apartmentId = route.params.id;
  
  const apartment = ref({
    title: 'Loading...',
    description: 'Loading...',
    image: '',
    features: [],
    price: 0
  });
  
  const fetchApartmentDetails = async () => {
    // Simulate fetching apartment details from an API or data source
    // Replace with your actual API call
    const data = {
      1: {
        title: 'Modern Apartment',
        description: 'A stylish apartment with modern amenities and a beautiful view.',
        image: './../assets/modern.jpg',
        features: ['2 Bedrooms', '1 Bathroom', 'Open Plan Living'],
        price: 1200
      },
      2: {
        title: 'Luxury Living',
        description: 'Experience luxury living in a spacious and elegant apartment.',
        image: './../assets/luxury.jpg',
        features: ['3 Bedrooms', '2 Bathrooms', 'Pool Access'],
        price: 2500
      },
      3: {
        title: 'Cozy Retreat',
        description: 'A cozy and comfortable apartment perfect for relaxation.',
        image: './../assets/cozy.jpg',
        features: ['1 Bedroom', '1 Bathroom', 'Close to Park'],
        price: 800
      },
      4: {
        title: 'Urban Oasis',
        description: 'An urban apartment with all the conveniences of city living',
        image: './../assets/cozy.jpg',
        features: ['1 Bedroom', '1 Bathroom', 'Close to Park'],
        price: 800
      },
      5: {
        title: 'Family Friendly',
        description: 'A spacious apartment ideal for families with children.',
        image: './../assets/cozy.jpg',
        features: ['1 Bedroom', '1 Bathroom', 'Close to Park'],
        price: 800
      },
      6: {
        title: 'Serene Escape',
        description: 'A serene apartment offering peace and tranquility.',
        image: './../assets/cozy.jpg',
        features: ['1 Bedroom', '1 Bathroom', 'Close to Park'],
        price: 800
      }
    };
  
    apartment.value = data[apartmentId] || {
      title: 'Not Found',
      description: 'Details not available.',
      image: '',
      features: [],
      price: 0
    };
  };
  
  onMounted(() => {
    fetchApartmentDetails();
  });
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  