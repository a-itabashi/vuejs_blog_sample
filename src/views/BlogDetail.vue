<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

type BlogType = {
  id: number
  title: string
  contents: string
}

const blog = ref<BlogType>({
  id: 0,
  title: '',
  contents: '',
})
const route = useRoute()

onMounted(async () => {
  const res = await axiosInstance.get(`blogs/${route.params['id']}`)
  blog.value = res.data
})
</script>
<template>
  <h1>ブログ記事</h1>
  <div>
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.contents }}</p>
    <div>
      <RouterLink to="/">ホーム</RouterLink>
    </div>
    <div>
      <RouterLink to="/blogs/create">ブログを書く</RouterLink>
    </div>
  </div>
</template>
