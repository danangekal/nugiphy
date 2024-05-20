import { defineStore } from 'pinia'

export interface AppState {
  /**
   * keyword search
   */
  keyword: string
  /**
   * rating search
   */
  rating: string
  /**
   * page search
   */
  page: number
}

export const useAppStore = defineStore('appStore', {
  state: (): AppState => ({
    keyword: '',
    rating: '',
    page: 1,
  }),
  actions: {
    setKeyword(value: string) {
      this.keyword = value
    },
    setRating(value: string) {
      this.rating = value
    },
    setPage(value: number) {
      this.page = value
    },
  },
})
