import { defineStore } from 'pinia'
import { ref } from 'vue'

const initAccount = {
  name: '奥恩奥恩',
  email: '@163.com',
  avatar: '',
}

const useAccountStore = defineStore('account', () => {
  // 1. 定义数据
  const account = ref({ ...initAccount })

  // 2. 函数动作
  function update(params: { name: string }) {
    Object.assign(account.value, params)
  }

  function clear() {
    account.value = { ...initAccount }
  }

  return { account, update, clear }
})

export default useAccountStore
