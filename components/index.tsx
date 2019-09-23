import React from 'react'
import styled from 'styled-components'

interface IProps {
  /**
   * name
   */
  name: string
}

const StyledHello = styled.div`
  background: #000;
  color: #fff;
`

export default class Hello extends React.Component<IProps, any> {
  render() {
    return <StyledHello>Hello, {this.props.name}</StyledHello>
  }
}