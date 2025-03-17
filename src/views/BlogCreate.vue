<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const contents = ref('')
const router = useRouter()

const onClick = async () => {
  await axiosInstance.post('/blogs', { title: title.value, contents: contents.value })
  router.push({ name: 'blogList' })
}
</script>
<template>
  <h1>ブログ作成</h1>
  <div>
    <h2>【タイトルを入力してください】</h2>
    <input class="title" v-model="title" />
  </div>
  <div>
    <h2>【本文を入力してください】</h2>
    <input class="contents" v-model="contents" />
  </div>
  <button class="button" @click="onClick">記事を作成</button>
</template>

<style scoped>
.title {
  width: 500px;
}
.contents {
  width: 500px;
  height: 300px;
}
.button {
  margin-top: 20px;
}
</style>
