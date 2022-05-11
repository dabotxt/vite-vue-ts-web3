<script setup lang="ts">
import { UserStore } from 'store/modules/user'
import { useWeb3 } from 'src/utils/useWeb3'
import { computed } from 'vue'
const { getBalance } = useWeb3()
const user = UserStore()
defineProps<{ msg: string }>()
const getAddress = async () => {
  await user.getWallet()
}
const walletAddress = computed((): string | null => {
  return user.getWalletAddress
})
</script>

<template>
  <ElButton @click="getAddress" type="primary">连接钱包</ElButton>
  <ElButton @click="getBalance(walletAddress)" type="primary">获取余额</ElButton>
  <h1>{{ msg }}</h1>
  <div>钱包地址：{{walletAddress}}</div>
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
