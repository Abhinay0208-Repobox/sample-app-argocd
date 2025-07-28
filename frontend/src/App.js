import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://flask-backend.react-flask-app.svc.cluster.local:5000/api/message')
  // Assumes same domain or reverse proxy
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>React + Flask App</h1>
      <h2>{message || 'Loading...'}</h2>
    </div>
  );
}

export default App;
