import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.css'
// Import devTools in development
if (process.env.NODE_ENV === 'development') {
  import('./lib/devTools')
}
if (process.env.NODE_ENV === 'development') {
  import('./lib/devTools')
}
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  const { worker } = await import('./mocks/browser')

  //  worker starts with quiet mode to reduce console noise
  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
