import { mount } from '@vue/test-utils'
import Main from '@/components/Main/Main.vue'
import MenuView from '@/components/MenuView/MenuView.vue'
import { formatDate } from '@/helper/helper'
import Search from '@/components/Search/Search.vue'

// TODO add Cypress automated testing, test Search functionality

test('Test formatDate', () => {
  const date = '2023-08-10'
  const formattedDate = formatDate(date)

  expect('N, 10. august 2023').toBe(formattedDate)
})

test('component renders', () => {
  const wrapper = mount(Main)

  const todo = wrapper.get('[data-test="test"]')

  expect(todo.text()).toBe('Muusikasündmused')
})


test('Check if MenuView mounts', () => {
  const wrapper = mount(MenuView)
  expect(wrapper.text()).toContain('Kõik')
})

test('emit search event', async () => {
  const wrapper = mount(Search)

  const searchValue = 'mode'

  const textInput = wrapper.find('input[type="text"]')
  await textInput.setValue(searchValue)
  expect(wrapper.find('input[type="text"]').element.value).toBe(searchValue)

  const button = wrapper.find('#search-button')

  await button.trigger('click')

  await wrapper.vm.$nextTick()

  expect(wrapper.emitted().search).toBeTruthy()
  expect(wrapper.emitted().search).toEqual([[searchValue]])

  const wrapperMain = mount(Main)
})
