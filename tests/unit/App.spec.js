// test works on vue version 3.0.6
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

test('Render without errors', () => {
  const wrapper = mount(App)

  expect(wrapper.html()).toContain('Stats Guru')
})