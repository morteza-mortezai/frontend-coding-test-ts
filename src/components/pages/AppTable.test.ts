import { render } from '@testing-library/vue'
import AppTable from './AppTable.vue'

test('it should work', () => {
  const { getByText } = render(AppTable, {
    props: {
      headers:['name','url'],
      items:[
        {name:'aa',url:'url'},
        {name:'bb',url:'url bb'},
    ]
    }
  })

  // assert output
  getByText('aa')
})