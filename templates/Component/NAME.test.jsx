import React from 'react'
import { shallow } from 'enzyme'

import NAME from './NAME'

describe('NAME', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<NAME {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})