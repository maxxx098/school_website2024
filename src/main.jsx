import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import global_en from './translations/en/engllish_page/global.json'
import global_zh from './translations/zh/chinese_page/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import {TransitionProvider } from './common/TransitionContext.jsx'

i18next.init ({
  interpolation: {escapeValue: false},
  lng:"en",
  resources: {
    en: {
      global: global_en,
    },
    zh: {
      global:global_zh,
    },
  },
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
    <TransitionProvider>
      <App />
    </TransitionProvider>
    </I18nextProvider>
  </StrictMode>,
)
