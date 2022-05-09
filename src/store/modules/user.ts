import { defineStore } from 'pinia'
import { store } from '../index'
interface UserState {
  count: number
}
export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    count: 50
  }),
  getters: {
    getCount(): number | null {
      return this.count
    }
  },
  actions: {
    // setWalletAddress(walletAddress: any | null) {
    //   this.walletAddress = walletAddress
    // }
  }
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
