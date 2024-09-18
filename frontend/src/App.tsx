import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const pingServer = async () => {
    setLoading(true);
    setResult('');
    setError('');

    try {
      const response = await axios.get('/api/ping');
      setResult(response.data.text);
    } catch (err) {
      setError('Error: Unable to reach the server');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="pong-container">
          <button onClick={pingServer} disabled={loading}>
            Ping
          </button>
          {loading && <p>Loading...</p>}
          {result && <p>{result}</p>}
          {error && <p className="error">{error}</p>}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
