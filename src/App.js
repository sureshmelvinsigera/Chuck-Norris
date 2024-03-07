import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState({});

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random`
    );
    const jsonData = await response.json();
    setJoke(jsonData);
  };

  // // Use useEffect to call handleSearch on component mount
  // useEffect(() => {
  //   handleSearch();
  // }, []); // Empty dependency array means this runs only on mount
  
  return (
    <>
    <h1>Get Chuck Norris Joke</h1>
    <button onClick={handleSearch}>Get Chuck Norris Joke</button>
    <p>{joke.value}</p>
    </>
  );
}

export default App;
