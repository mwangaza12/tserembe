<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
  
      <main class="flex-grow container mx-auto p-4">
        <section class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-center mb-6">Get in Touch</h2>
  
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 lg:w-2/5 p-4">
              <h3 class="text-lg font-semibold mb-4">Our Address</h3>
              <p class="text-gray-600">
                123 Apartment Lane<br>
                Suite 456<br>
                Cityville, ST 12345
              </p>
              <p class="text-gray-600 mt-4">
                <strong>Phone:</strong> (123) 456-7890<br>
                <strong>Email:</strong> <a href="mailto:info@apartment.com" class="text-blue-500">info@apartment.com</a>
              </p>
            </div>
  
            <div class="w-full md:w-1/2 lg:w-3/5 p-4">
              <h3 class="text-lg font-semibold mb-4">Send Us a Message</h3>
              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label for="name" class="block text-gray-700">Name</label>
                  <input type="text" id="name" v-model="form.name" class="mt-1 p-2 w-full border border-gray-300 rounded-lg" required>
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-gray-700">Email</label>
                  <input type="email" id="email" v-model="form.email" class="mt-1 p-2 w-full border border-gray-300 rounded-lg" required>
                </div>
                <div class="mb-4">
                  <label for="message" class="block text-gray-700">Message</label>
                  <textarea id="message" v-model="form.message" class="mt-1 p-2 w-full border border-gray-300 rounded-lg" rows="4" required></textarea>
                </div>
                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
              </form>
            </div>
          </div>
        </section>
    </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic here
        console.log('Form submitted:', this.form);
        alert('Thank you for contacting us! We will get back to you soon.');
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  