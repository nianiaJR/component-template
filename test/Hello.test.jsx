import React from 'react'
import renderer from 'react-test-renderer'
import Hello from '../components'

describe('Hello Test', () => {
  test('test case1', () => {
    const component = renderer.create(
      <Hello name="test" />
    )

    let tree = component.toJSON()
    expect(tree.children.includes('test'))
  })
})
