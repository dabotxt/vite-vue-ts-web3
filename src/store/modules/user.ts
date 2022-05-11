import { defineStore } from 'pinia'
import { useWeb3 } from 'src/utils/useWeb3'
import { store } from '../index'
interface UserState {
  walletAddress: string | null
}
export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    walletAddress: null
  }),
  getters: {
    getWalletAddress(): string | null {
      return this.walletAddress
    }
  },
  actions: {
    setWalletAddress(walletAddress: any | null) {
      this.walletAddress = walletAddress
    },
    async getWallet () {
      const { getAccount } = useWeb3()
      const account = await getAccount()
      this.setWalletAddress(account[0])
    }
  }
})

export function UserStore() {
  return useUserStore(store)
}
