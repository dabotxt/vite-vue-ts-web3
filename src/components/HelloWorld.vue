<script setup lang="ts">
import { UserStore } from 'store/modules/user'
import { computed } from 'vue'
const user = UserStore()
defineProps<{ msg: string }>()
const getAddress = async () => {
  await user.getWallet()
}
const walletAddress = computed((): string | null => {
  return user.getWalletAddress
})
getAddress()
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>钱包地址：{{walletAddress}}</div>
  钱包地址：0x93CFfAF883bFdb964c5E66d7b599f8020D919d65
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
