import { mount, flushPromises } from "@vue/test-utils";
import AppPagination from './AppPagination.vue'

describe('AppPagination test', async () => {
  const wrapper = mount(AppPagination);
  beforeEach(() => {
    wrapper.setProps({
      total: 22,
      pageCount: 5,
      currentPage: 1
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })

  test("AppPagination Emit correctly", async () => {
    wrapper.findAll('ul li').at(1).trigger('click')
    await flushPromises()
    expect(wrapper.emitted()).toHaveProperty('paginate')
    const paginateEvent = wrapper.emitted('paginate')
    expect(paginateEvent).toHaveLength(1)
    expect(paginateEvent).toEqual([[1]])
  });

})


