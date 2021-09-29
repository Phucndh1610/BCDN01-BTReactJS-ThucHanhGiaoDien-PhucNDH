import logo from './logo.svg';
import './App.css';
import HeaderComponent from './LayoutComponents/HeaderComponent';
import BodyComponent from './LayoutComponents/BodyComponent';
import FooterComponent from './LayoutComponents/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
