import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Switch from './switch.vue'

describe('Switch', () => {
  test('can switch on and off', async () => {
    const wrapper = mount(Switch)

    // 初始狀態應為關閉
    expect(wrapper.find('input').element.checked).toBe(false)

    // 模擬點擊checkbox開關
    await wrapper.find('input').trigger('click')
    expect(wrapper.find('input').element.checked).toBe(true)

    // 再次模擬點擊checkbox開關
    await wrapper.find('input').trigger('click')
    expect(wrapper.find('input').element.checked).toBe(false)
  })
})
