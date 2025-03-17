<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { ref } from 'vue'

const title = ref('')
const contents = ref('')

const emit = defineEmits(['onSubmit'])

const handleSubmit = async () => {
  await axiosInstance.post('/blogs', { title: title.value, contents: contents.value })
  emit('onSubmit')
}
</script>

<template>
  <div>
    <h2>【タイトルを入力してください】</h2>
    <input class="title" v-model="title" />
  </div>
  <div>
    <h2>【本文を入力してください】</h2>
    <textarea class="contents" v-model="contents" />
  </div>
  <button class="button" @click="handleSubmit">記事を作成</button>
</template>
