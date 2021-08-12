import { mount } from '@vue/test-utils'
import Statitem from '@/components/StatItem.vue'

test('test Statitem props', () => {
  const wrapper = mount(Statitem, {
    props: {
      title: 'Mean',
      figure: '5'
    }
  })

  expect(wrapper.html()).toContain('Mean')
})