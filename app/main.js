import { Home } from '../pages/Home.js'
import { About } from '../pages/About.js'
import { Contact } from '../pages/Contact.js'

const { createApp, ref } = Vue

createApp({
  setup() {
    const currentPage = ref('Home')
    return { currentPage }
  },
  components: {
    Home,
    About,
    Contact
  },
  template: `
    <nav class="flex gap-4 mb-6">
      <button @click="currentPage = 'Home'" class="bg-blue-500 text-white px-4 py-2 rounded">Home</button>
      <button @click="currentPage = 'About'" class="bg-green-500 text-white px-4 py-2 rounded">About</button>
      <button @click="currentPage = 'Contact'" class="bg-purple-500 text-white px-4 py-2 rounded">Contact</button>
    </nav>
    <component :is="currentPage" />
  `
}).mount('#app')
