<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { onMounted, ref } from 'vue'

type BlogType = {
  id: number
  title: string
}

const blogs = ref<BlogType[]>([])

onMounted(async () => {
  const res = await axiosInstance.get('blogs')
  blogs.value = res.data
})
</script>
<template>
  <h1>ブログ一覧</h1>
  <ul>
    <li v-for="{ id, title } in blogs" :key="id">
      <router-link :to="`/blogs/${id}`">{{ title }}</router-link>
    </li>
  </ul>
  <div>
    <div>
      <RouterLink to="/">ホーム</RouterLink>
    </div>
    <div>
      <RouterLink to="/blogs/create">ブログを書く</RouterLink>
    </div>
  </div>
</template>
