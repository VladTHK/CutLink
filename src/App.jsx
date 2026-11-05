import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from "./components/Aside/Aside"
import Main from './pages/HomePage/Main'
import ThanksPage from './pages/SettingsPage/ThanksPage'
import TermsPage from './pages/SettingsPage/TermsPage'
import styles from './App.module.css'

function App() {
  const baseName = import.meta.env.PROD ? "/CutLink" : "/";

  return (
    <BrowserRouter basename={baseName}>
      <div className={styles.app}>
        <Aside />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settings/thanks" element={<ThanksPage />} />
          <Route path="/settings/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
