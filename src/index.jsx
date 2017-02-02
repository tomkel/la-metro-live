import './index.css'
import React from 'react';
import { render } from 'react-dom'
import GMap from './GMap'

render(
  <GMap toast={() => console.log('toast')} />,
  document.getElementById('root'),
)
