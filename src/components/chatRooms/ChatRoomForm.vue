<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { ref } from 'vue'

const newRoomName = ref('')

const createRoom = async () => {
  try {
    const response = await axiosInstance.post('rooms', { name: newRoomName.value })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <h3>チャットルーム作成</h3>
  <input type="text" v-model="newRoomName" />
  <div>
    <button>作成</button>
  </div>
</template>
