import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BaseButton from '../components/BaseButton.vue'
describe('BaseButton', () => {
  test('renders slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Main Content'
      }
    })
    expect(wrapper.text()).toContain('Main Content')
  })

  test('renders default classes', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('btn')
    expect(wrapper.classes()).toContain('rounded-3xl')
    expect(wrapper.classes()).toContain('text-white')
  })

  test('renders outline class', () => {
    const wrapper = mount(BaseButton, {
      props: {
        color: 'transparent',
        outline: true,
      },
    })
    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('bg-transparent')
    expect(wrapper.classes()).toContain('text-gray-600')
  })

  test('renders gradient class', () => {
    const wrapper = mount(BaseButton, {
      props: {
        color: 'gradient',
      },
    })
    expect(wrapper.classes()).toContain('bg-gradient-to-r')
    expect(wrapper.classes()).toContain('from-[#FF7527]')
    expect(wrapper.classes()).toContain('to-[#DD2476]')
  })

  test('renders color class', () => {
    const wrapper = mount(BaseButton, {
      props: {
        color: 'blue',
      },
    })
    expect(wrapper.classes()).toContain('bg-blue-300')
  })

  test('renders dynamic color class', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        color: 'blue',
      },
    })
    expect(wrapper.classes()).toContain('bg-blue-300')

    await wrapper.setProps({
      color: 'red',
    })

    expect(wrapper.classes()).toContain('bg-red-300')
  })

  test('click event triggers update event', () => {
    const wrapper = mount(BaseButton)
    wrapper.trigger('click')
    const emittedEvents = wrapper.emitted<'update'>('update')
    expect(emittedEvents).toBeTruthy()
    expect(emittedEvents![0]).toEqual(['btn click!'])
  })
  
})
