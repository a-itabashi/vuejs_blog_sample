<script setup lang="ts">
import { axiosInstance } from '@/utils/axios'
import { onMounted, onUnmounted, ref, type PropType } from 'vue'
// import { inject } from 'vue'
import ActionCable, { type Channel } from 'actioncable'
const cable = ActionCable.createConsumer('ws://localhost:3000/cable')

type MessageType = {
  id: number
  sender_name: string
  content: string
}

const props = defineProps<{
  roomId: {
    type: PropType<string>
    required: true
  }
}>()

const { roomId } = props
const roomName = ref('')
const messages = ref<MessageType[]>([])
const senderName = ref('')
const newMessageContent = ref('')
const subscription = ref<Channel & { received(data: MessageType): void }>()

// const cable = inject('cable')

// console.log(cable)

const fetchMessages = async () => {
  try {
    const response = await axiosInstance.get(`rooms/${roomId}/messages`)
    roomName.value = response.data.room_name
    messages.value = response.data.messages
  } catch (error) {
    console.error(error)
  }
}

const sendMessage = async () => {
  try {
    const response = await axiosInstance.post(`rooms/${roomId}/messages`, {
      content: newMessageContent.value,
      sender_name: senderName.value,
    })
    newMessageContent.value = ''
    messages.value.push(response.data)
  } catch (error) {
    console.error(error)
  }
}

const createSubscription = () => {
  subscription.value = cable.subscriptions.create(
    { channel: 'RoomChannel', room_id: roomId },
    {
      received(data: MessageType) {
        messages.value.push(data)
      },
    },
  )
}

onMounted(() => {
  fetchMessages()
  createSubscription()
})

onUnmounted(() => {
  // if (subscription) {
  // サブスクリプションを解除
  subscription.value?.unsubscribe()
  console.log('Subscription has been removed.')
  // }
})
</script>
<template>
  <div>
    <h1>チャットルーム {{ roomName }}</h1>

    <ul>
      <li v-for="message in messages" :key="message.id">
        <strong>{{ message.sender_name }}:</strong> {{ message.content }}
      </li>
    </ul>
  </div>

  <form @submit.prevent="sendMessage">
    <div>
      <h3>名前</h3>
      <input type="text" v-model="senderName" placeholder="名前を入力" required />
    </div>
    <div>
      <h3>メッセージ</h3>
      <input type="text" v-model="newMessageContent" placeholder="メッセージを入力" required />
    </div>
    <div>
      <button type="submit">送信</button>
    </div>
  </form>
</template>
