// import Home from './components/Home.js'
// import About from './components/About.js'
// import Contact from './components/Contact.js'

// const { createApp, ref } = Vue

// createApp({
//   setup() {
//     const currentPage = ref('Home')
//     return { currentPage }
//   },
//   components: {
//     Home,
//     About,
//     Contact
//   }
// }).mount('#app')

    const Home = {
      template: `
        <div class="bg-white p-6 rounded shadow">
          <h1 class="text-2xl font-bold mb-4">Welcome to the Featured App</h1>
          <p>This is the home page of your Vue + Tailwind SPA with no build setup!</p>
        </div>
      `
    }

    const About = {
      template: `
        <div class="bg-white p-6 rounded shadow">
          <h1 class="text-2xl font-bold mb-4">About This App</h1>
          <p>This app is built using Vue 3 and Tailwind via CDN. It's a simple static SPA without any build tools.</p>
        </div>
      `
    }

    const Contact = {
      template: `
        <div class="bg-white p-6 rounded shadow">
          <h2 class="text-xl font-bold mb-4">Contact Us</h2>
          <form @submit.prevent="submitForm" class="space-y-4 mb-6">
            <input v-model="name" type="text" placeholder="Your Name" class="w-full p-2 border rounded" required />
            <input v-model="email" type="email" placeholder="Your Email" class="w-full p-2 border rounded" required />
            <textarea v-model="message" placeholder="Your Message" class="w-full p-2 border rounded" required></textarea>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
          </form>

          <div>
            <h3 class="text-lg font-semibold mb-2">Submitted Messages</h3>
            <ul v-if="messages.length" class="space-y-2">
              <li v-for="(msg, index) in messages" :key="index" class="p-3 border rounded bg-gray-50">
                <p class="font-semibold">{{ msg.name }} ({{ msg.email }})</p>
                <p>{{ msg.message }}</p>
              </li>
            </ul>
            <p v-else>No messages yet.</p>
          </div>
        </div>
      `,
      data() {
        return {
          name: '',
          email: '',
          message: '',
          messages: []
        }
      },
      methods: {
        submitForm() {
          const newMessage = {
            name: this.name,
            email: this.email,
            message: this.message
          }
          const existing = JSON.parse(localStorage.getItem('messages') || '[]')
          existing.push(newMessage)
          localStorage.setItem('messages', JSON.stringify(existing))
          this.name = this.email = this.message = ''
          this.loadMessages()
        },
        loadMessages() {
          this.messages = JSON.parse(localStorage.getItem('messages') || '[]')
        }
      },
      mounted() {
        this.loadMessages()
      }
    }

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
      }
    }).mount('#app')  