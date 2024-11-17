import React, { useState, useEffect } from 'react';

// https://api.github.com/users/octocat/repos

const GithubRepo = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('sellva3009');

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`https://api.github.com/users/${user}/repos`, { signal })
            .then(response => response.json())
            .then(data => {
                setRepos(data);
                setLoading(false);
                // console.log(data);
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    console.error('Fetch error:', error);
                }
            })

        return () => {
            abortController.abort();
        }
    }, [user]);

    function handleSubmit(e) {
      e.preventDefault();
      setUser(e.target[0].value);
      e.target[0].value = '';
    }

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

  return (
    <div>
        <h2>GithubRepo</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter the github user' name='user' />
            <button>Submit</button>
        </form>
        <p><strong>Name - </strong>{repos[0].owner.login}</p>
        <img src={repos[0].owner.avatar_url} alt={repos[0].owner.login} />

        <h3>Repo list names</h3>
        <ul>
            {repos.map((repo) => (
                <li key={repo.id}>
                    {repo.name}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default GithubRepo