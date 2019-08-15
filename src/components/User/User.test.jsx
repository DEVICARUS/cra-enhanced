import React from 'react'
import { shallow } from 'enzyme'

import User from './User'

describe('User', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<User {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})