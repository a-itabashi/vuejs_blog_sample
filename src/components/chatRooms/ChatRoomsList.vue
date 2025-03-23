<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { onMounted, ref } from 'vue'

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

onMounted(() => {
  fetchChatRooms()
})
</script>

<template>
  <h1>VueChat - チャットルーム一覧</h1>
  <ul>
    <li v-for="room in chatRooms" :key="room.id">
      <router-link :to="`/rooms/${room.id}`">{{ room.name }}</router-link>
    </li>
  </ul>
</template>
