import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
    <BrowserRouter>
       <Routes>
          <Route path="/" exact element={<Home />} />
       </Routes>
 </BrowserRouter>
)

export default App
