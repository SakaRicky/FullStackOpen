import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [current, setCurrent] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  let highestVoteIndex = null;

  const selectNextAnecdot = () => {
    const selectedIndex = Math.round(Math.random() * (anecdotes.length - 1));
    setCurrent(selectedIndex);
    setSelected(selectedIndex);
    console.log(selectedIndex);
  }

  const setVote = () => {
    const newVotes = [...votes];
    newVotes[current] += 1;
    setVotes(newVotes);
    console.log(newVotes);
  }

  for (let vote = 0; vote < votes.length; vote++) {
    if (votes[vote] > highestVoteIndex) {
      highestVoteIndex = vote;
    }
  }

  let anecdoteWithMostVotes = <p>No anecdote has been voted yet</p>

  if (highestVoteIndex) {
    console.log(props.anecdotes[highestVoteIndex]);
    anecdoteWithMostVotes = (
      <div>
        <p>{props.anecdotes[highestVoteIndex]}</p>
        <p>has {votes[highestVoteIndex]}</p>
      </div>
    );
  }

  return (
    <div>
      <section>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <p>
          <Button text="vote" handleClick={setVote} />
          <Button text="next anecdote" handleClick={selectNextAnecdot} />
        </p>
      </section>

      <section>
        <h1>Anecdote with most votes</h1>
        {anecdoteWithMostVotes}
      </section>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)