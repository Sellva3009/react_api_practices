import React, { useState, useEffect } from "react";

// https://v2.jokeapi.dev/joke/Any?amount=5

const RandomJokes = () => {
  const [jokes, setJokes] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=5");
      const data = await response.json();
      setJokes(data.jokes);
      console.log(data.jokes);
      setLoading(false);
    };
    fetchJokes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>RandomJokes</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            <p>
              {joke.setup} - {joke.delivery}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomJokes;
