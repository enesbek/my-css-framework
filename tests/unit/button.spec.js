import { shallowMount } from '@vue/test-utils'
import Ebtn from '@/components/Ebtn.vue'

describe('Ebtn.vue colors', () => {
  it('renders btn with correct name', () => {
    const wrapper = shallowMount(Ebtn, {
      slots: {
        default: 'I am a btn'
      }
    })
    expect(wrapper.html()).toContain('I am a btn')
  })

  it('renders btn with correct name', () => {
    const wrapper = shallowMount(Ebtn, {
      slots: {
        default: 'I am a btn'
      }
    })
    wrapper.trigger('click')
  })

  it('renders red button', () => {
    const wrapper = shallowMount(Ebtn, {
      props: { variant: "danger" }
    })
    expect(wrapper.html()).toContain('color: red')
  })

  it('renders green button', () => {
    const wrapper = shallowMount(Ebtn, {
      props: { variant: "success" }
    })
    expect(wrapper.html()).toContain('color: green')
  })

  it('renders blue button', () => {
    const wrapper = shallowMount(Ebtn, {
      props: { variant: "primary" }
    })
    expect(wrapper.html()).toContain('color: blue')
  })
})

describe('Ebtn.vue sizes', () => {
  it('renders default size button', () => {
    const wrapper = shallowMount(Ebtn)
    expect(wrapper.html()).toContain('size: 0.7em 1.1em')
  })

  it('renders small button', () => {
    const wrapper = shallowMount(Ebtn, {
      props: { size: "sm" }
    })
    expect(wrapper.html()).toContain('size: 0.5em 0.75em')
  })

  it('renders large button', () => {
    const wrapper = shallowMount(Ebtn, {
      props: { size: "lg" }
    })
    expect(wrapper.html()).toContain('size: 1em 1.5em')
  })
})

describe('Ebtn.vue round', () => {
  it('renders default round button', () => {
    const wrapper = shallowMount(Ebtn)
    expect(wrapper.html()).toContain('rounded: 7px')
  })

  it('renders squared button', () => {
    const wrapper = shallowMount(Ebtn, {
      props: { squared: true }
    })
    expect(wrapper.html()).toContain('rounded: 0px')
  })

  it('renders pill button', () => {
    const wrapper = shallowMount(Ebtn, {
      props: { pill: true }
    })
    expect(wrapper.html()).toContain('rounded: 30px')
  })
})




