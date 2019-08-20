import React from 'react'
import { shallow } from 'enzyme'

import capNAME from './capNAME'

describe('capNAME', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<capNAME {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})