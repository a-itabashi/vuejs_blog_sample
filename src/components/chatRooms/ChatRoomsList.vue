<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import axios from 'axios'
import { onMounted, ref } from 'vue'

type ChatRoomType = {
  id: number
  name: string
}

const chatRooms = ref<ChatRoomType[]>([])

const fetchChatRooms = () => {
  axiosInstance
    .get('rooms')
    .then((response) => {
      chatRooms.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
}

onMounted(async () => {
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
