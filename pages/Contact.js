export const Contact = {
  template: `
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-xl font-bold mb-4">Contact Us</h2>
      <form @submit.prevent="submitForm" class="space-y-4 mb-6">
        <input v-model="name" type="text" placeholder="Name" class="w-full p-2 border rounded" required>
        <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded" required>
        <textarea v-model="message" placeholder="Message" class="w-full p-2 border rounded" required></textarea>
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
      const newMsg = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      const all = JSON.parse(localStorage.getItem('messages') || '[]')
      all.push(newMsg)
      localStorage.setItem('messages', JSON.stringify(all))
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
