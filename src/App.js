//This is a practice file of the original App.js file. I am re-creating it to test my understanding
//of the concepts contained in the original file.


import React from 'react';
import './App.css';


const App = () => {

  const stories = [
      {
        title: 'React',
        url: 'https://reactjs.org',
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

    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearch = event => {
      setSearchTerm(event.target.value);
      console.log(searchTerm);
      
    }

  return (
    
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch}/>

      <hr />

      <List list={stories}/>
    </div>
);

};

const Search = props => {
  /*const handleChange = event => {
    //console.log(event.target.value)
    setSearchTerm(event.target.value);

    props.onSearch(event);
  }
*/
  return (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
  </div>

  );
};

const List = props => {
return (
  props.list.map(function(item) {
    return (
      <div key={item.objectID}>
        <span>{item.author} - </span>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
      </div>
    );
  })

);
};

export default App;