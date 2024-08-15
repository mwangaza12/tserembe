<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">

    <main class="flex-grow container mx-auto p-4">
      <section class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-center">
          <img src="https://via.placeholder.com/150" alt="Apartment Complex" class="w-32 h-32 mx-auto rounded-full mb-4"/>
          <h2 class="text-xl font-semibold mb-2">Welcome to Our Community</h2>
          <p class="text-gray-700">
            At our apartment complex, we offer a blend of comfort and convenience. Our spacious units and top-notch amenities make us the perfect choice for your next home.
          </p>
        </div>

        <div class="mt-8 flex flex-wrap justify-around">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div class="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 class="text-lg font-semibold mb-2">Our Mission</h3>
              <p class="text-gray-600">
                To provide a comfortable living experience with excellent customer service and well-maintained facilities.
              </p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div class="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 class="text-lg font-semibold mb-2">Our Vision</h3>
              <p class="text-gray-600">
                To be the leading choice for apartment living in the area, offering unmatched quality and value.
              </p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div class="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 class="text-lg font-semibold mb-2">Our Values</h3>
              <p class="text-gray-600">
                We value community, integrity, and excellence, and strive to reflect these in every aspect of our service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    
  </div>
</template>

<script setup>
const name = 'about'
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
