import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Edit from './pages/edit';
function App() {
  

  return (
    <div className="App pt-3 pb-3">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates/:id/edit" element={<Edit />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
