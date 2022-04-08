import { defineStore } from 'pinia'
import { store } from 'src/store/index'
export const useUserStore = defineStore({
    id: 'app-user',
    state: () => ({
        count: 0
    }),
    getters: {
        getCount () {
            return this.count
        }
    },
    actions: {
        setUserInfo() {
        }
    }
})

export function useUserStoreWithOut() {
    return useUserStore(store)
}
