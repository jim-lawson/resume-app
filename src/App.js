import React from 'react'
import { AppContextProvider } from './AppContext'
import Page from './components/Page'
import { pageData } from './data/data'

function App() {
  const context = {
    colors: { backgroundColor: '#ddd', accentColor: 'rgb(2, 130, 174)' }
  }
  return (
    <AppContextProvider value={context}>
      {pageData.pages.map((page, index) => (
        <Page key={index} page={page} />
      ))}
    </AppContextProvider>
  )
}

export default App
