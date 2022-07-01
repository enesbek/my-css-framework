import { shallowMount } from '@vue/test-utils'
import Ebtn from '@/components/Ebtn.vue'

describe('Ebtn.vue', () => {
  it('renders btn with correct name', () => {
    const wrapper = shallowMount(Ebtn, {
      slots: {
        default: 'I am a btn'
      }
    })
    expect(wrapper.html()).toContain('I am a btn')
  })

  it('renders red button', () => {
    const wrapper = shallowMount(Ebtn, {
      slots: {
        default: 'I am a btn'
      },
      props: { variant: "danger" }
    })
    expect(wrapper.html()).toContain('color: red')
  })

  it('renders small button', () => {
    const wrapper = shallowMount(Ebtn, {
      slots: {
        default: 'I am a btn'
      },
      props: { size: "sm" }
    })
    expect(wrapper.html()).toContain('size: 0.5em 0.75em')
  })

  it('renders squared button', () => {
    const wrapper = shallowMount(Ebtn, {
      slots: {
        default: 'I am a btn'
      },
      props: { squared: true }
    })
    expect(wrapper.html()).toContain('rounded: 0px')
  })
})

