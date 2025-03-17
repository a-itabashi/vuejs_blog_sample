<script setup lang="ts">
import { useRouter } from 'vue-router'
import Form from '@/components/blogs/form.vue'

const router = useRouter()

const handleSubmit = async () => {
  router.push({ name: 'blogList' })
}
</script>
<template>
  <h1>ブログ作成</h1>
  <Form @onSubmit="handleSubmit" />
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
