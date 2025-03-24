<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { onMounted, ref } from 'vue'
import ChatRoomsList from '@/components/chatRooms/ChatRoomsList.vue'
// import ChatRoomForm from '@/components/chatRooms/ChaTRoomForm.vue'

type ChatRoomType = {
  id: number
  name: string
}

const chatRooms = ref<ChatRoomType[]>([])

const fetchChatRooms = async () => {
  try {
    const response = await axiosInstance.get('rooms')
    chatRooms.value = response.data
  } catch (error) {
    console.error(error)
  }
}

const handleCreateRoom = async (roomName: string) => {
  try {
    const response = await axiosInstance.post('rooms', { name: roomName })
    const { id, name } = response.data
    chatRooms.value.push({ id, name })
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchChatRooms()
})
</script>

<template>
  <ChatRoomsList :chatRooms="chatRooms" />
  <ChatRoomForm @create-room="handleCreateRoom" />
</template>
