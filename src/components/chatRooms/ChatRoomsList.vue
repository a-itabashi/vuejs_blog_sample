<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { onMounted, ref } from 'vue'

type ChatRoomType = {
  id: number
  name: string
}

const props = defineProps<{
  chatRooms: ChatRoomType[]
}>()
</script>

<template>
  <h1>VueChat - チャットルーム一覧</h1>
  <ul>
    <li v-for="room in props.chatRooms" :key="room.id">
      <router-link :to="`/rooms/${room.id}`">{{ room.name }}</router-link>
    </li>
  </ul>
</template>
