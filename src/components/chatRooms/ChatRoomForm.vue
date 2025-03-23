<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const newRoomName = ref('')
const emit = defineEmits(['create-room'])

const createRoom = () => {
  emit('create-room', newRoomName.value)
  newRoomName.value = ''
}
</script>

<template>
  <div>
    <h3>チャットルーム作成</h3>
    <input type="text" v-model="newRoomName" placeholder="チャットルーム名" />
    <button @click="createRoom">作成</button>
  </div>
</template>
