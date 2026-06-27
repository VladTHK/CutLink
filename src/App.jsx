import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Main from './pages/HomePage/Main'
import Settings from './pages/SettingsPage/SettingsPage'
import styles from './App.module.css'

function App() {
  // Определяем basename в зависимости от окружения
  const baseName = import.meta.env.PROD ? "/CutLink" : "/";

  return (
    <BrowserRouter basename={baseName}>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
