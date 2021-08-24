import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
