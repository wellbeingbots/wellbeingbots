import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppState from './AppState'
import App from './App'

const el = document.createElement('div')
el.id = 'wellbeingbots'
const appState = new AppState()
ReactDOM.render(<App appState={appState} />, el)
document.body.appendChild(el)
console.log('wellbeing started')
