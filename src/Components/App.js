

import '../App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Container>

  );
}

export default App;
