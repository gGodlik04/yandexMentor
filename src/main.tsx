import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { JsPower } from './components/JsPower/JsPower.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Routes>
        <Route path="/JsPower" element={<JsPower/>}/>
        <Route path="" element={<App/>}/>
    </Routes>
    </BrowserRouter>
)
