import { render } from '@testing-library/vue'
import { mount, flushPromises } from "@vue/test-utils";
import AppTable from './AppTable.vue'

describe('AppTable test', async () => {
  const wrapper = mount(AppTable);
  beforeEach(() => {
    wrapper.setProps({
      headers: ['name', 'url'],
      items: [
        { name: 'aa', url: 'url' },
        { name: 'bb', url: 'url bb' },
      ]
    })
    //  flushPromises()
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test("AppTable Component renders the correct headers", () => {
    const headers = wrapper.findAll('thead tr th')
    expect(headers.at(0).text()).toBe('name')
    expect(headers.at(1).text()).toBe('url')
  });

  test("AppTable Component renders the correct rows", () => {
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toEqual(2)
  });

  test("AppTable Component renders the correct items on a row", () => {
    const items = wrapper.findAll('tbody tr td')
    expect(items.at(0).text()).toBe('aa')
    expect(items.at(1).text()).toBe('url')
  });

})

describe('AppTable slot test', async () => {
  const wrapper = mount(AppTable, {
    props: {
      headers: ['name', 'url'],
      items: [
        { name: 'aa', url: 'url' },
        { name: 'bb', url: 'url bb' },
      ]
    },
    slots: {
      name: 'this is slotted content',
    }
  });
  await flushPromises()

  test("AppTable Component renders the correct slot", () => {

    const items = wrapper.findAll('tbody tr td')
    expect(items.at(0).text()).toBe('this is slotted content')
  });

})

