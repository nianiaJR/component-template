import { storiesOf } from '@storybook/react'
import React from 'react'

import Hello from '../components'
import Doc from '../story-utils/Doc'
import apiMd from '../docs/api.md'
import codeMd from '../docs/demo1.md'

storiesOf('Hello', module)
  .add('Demo1', () => (
    <>
      <Hello name="test" />
      <Doc apiMarkdown={apiMd} codeMarkdown={codeMd} />
    </>
  ))