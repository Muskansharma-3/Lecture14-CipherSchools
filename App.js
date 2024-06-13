import logo from './logo.svg';
import './App.css';

function App() {
  const NAME = 'CipherSchools'
  return (
    <>
    <div>
      <h1 style={{
        color: "red",
        textAlign: "center",
      }}>Hello from {NAME}!</h1>
      </div>
      <div>
        <p>This is {NAME}</p>
      </div>
      </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
