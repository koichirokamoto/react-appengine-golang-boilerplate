import React from 'react'
import { render } from 'react-dom'
import Editor from './components/Editor'
import '../css/style.scss'

render(
  <Editor />,
  document.getElementById('content')
)
