import React from 'react';
import './App.css';

const App = () => {
  
  const stories = [
    {
      title: 'React',
      url: 'https://react.js.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];

  //Callback for lifting state
  const handleSearch = event => {
    console.log(event.target.value);
  };

  
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List list={stories}/>
    
    </div>
  );
};

//Search component
const Search = props => {
    
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = event => {
    
    setSearchTerm(event.target.value);

    props.onSearch(event);
    
    };

    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
  
        <p>
          Searching for <strong>{searchTerm}</strong>
        </p>
      </div>
    );
};

//List component
const List = props => 
  props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> {item.author} </span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));                                              


//Examples for practicing and understanding concepts

/*
const welcome = {
  greeting: 'Hey',
  title: 'Hyperion'
};

const anArray = [1, 2, 3, 7, 7, 7]

function getTitle(title) {
  return title;
}

*/
/*
function getAlphabet() {
  return ['a', 'b'];
}

const [firstLetter, secondLetter] = getAlphabet();
console.log('First letter: ' , firstLetter);

function Example () {
  const [count, setCount] = React.useState(0);

  return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
    Click me
    </button>
  </div>
  );
}
*/

/*
const List = props => 
  props.list.map(item => (
      <div key="item.objectID">
        <span>{item.author} - </span>
        <span>{item.title}</span>
      </div>
  ));
*/  

  



export default App;
