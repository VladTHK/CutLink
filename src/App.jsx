import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Main from './pages/HomePage/Main'
import ThanksPage from './pages/SettingsPage/ThanksPage'
import ThemePage from './pages/SettingsPage/ThemePage'
import TermsPage from './pages/SettingsPage/TermsPage'
import styles from './App.module.css'

function App() {
  const baseName = import.meta.env.PROD ? "/CutLink" : "/";

  return (
    <BrowserRouter basename={baseName}>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settings/thanks" element={<ThanksPage />} />
          <Route path="/settings/terms" element={<TermsPage />} />
          <Route path="/settings/themes" element={<ThemePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
