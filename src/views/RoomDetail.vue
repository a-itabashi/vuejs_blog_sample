<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { onMounted, ref, type PropType } from 'vue'

type MessageType = {
  id: number
  sender_name: string
  content: string
}

const props = defineProps<{
  roomId: {
    type: PropType<string>
    required: true
  }
}>()

const { roomId } = props
const roomName = ref('')
const messages = ref<MessageType[]>([])

const fetchMessages = async () => {
  try {
    const response = await axiosInstance.get(`rooms/${roomId}/messages`)
    messages.value = response.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchMessages()
})
</script>
<template>
  <div>
    <h1>チャットルーム {{ roomId }}</h1>

    <ul>
      <li v-for="message in messages" :key="message.id">
        <strong>{{ message.sender_name }}:</strong> {{ message.content }}
      </li>
    </ul>
  </div>
</template>
