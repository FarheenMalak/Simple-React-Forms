import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome! Name: ${name}\nEmail: ${email}\nNumber: ${number}`);
    setName('');
    setEmail('');
    setNumber('');
  };

  return (
    <div className="container">
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
        />
        <input
          type="email"
          className="inputEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
        />
        <input
          type="number"
          className="inputNumber"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your number..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
