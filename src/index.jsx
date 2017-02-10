import React from 'react'
import { render } from 'react-dom'
import './index.css'
import GMap from './GMap'

render(
  <GMap toast={() => console.log('toast')} />,
  document.getElementById('root'),
)
