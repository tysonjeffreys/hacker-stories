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

    const useSemiPersistentState = (key, initialState) => {
    
    const [value, setValue] = React.useState(localStorage.getItem('key') || initialState);

    React.useEffect(() => {
      localStorage.setItem('key', value);
      //console.log(searchTerm);
    }, [value, key]);
    
    return [value, setValue];
  }

    const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');
    
    const handleSearch = event => {
      setSearchTerm(event.target.value);
      //console.log(searchTerm);

    }

    const searchedStories = stories.filter(story => 
       story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories}/>
    </div>
);

};

const Search = ({search, onSearch}) => (
  /*const handleChange = event => {
    //console.log(event.target.value)
    setSearchTerm(event.target.value);

    props.onSearch(event);
  }
*/
  
  <>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />
  </>

 );


const List = ({ list }) => 
  list.map(item => <Item key={item.objectID} {...item} />);


const Item = ({ title, url, author, num_comments, points }) => (
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span> - {author}</span>
    <span> - {num_comments}</span>
    <span> - {points}</span>
  </div>
)
    





//Practice for understanding filter
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'desctruction',
  'present'
];

const filteredWords = words.filter(function(word) {
  return word.length >6;
});

console.log(filteredWords)

//Practice for understanding nested object destructuring

const user = {
  firstName: 'Robin',
  pet: {
    name: 'Trixi',
  },
};

const {firstName, pet: {name}} = user;

console.log(firstName);

/*
//Practice for understanding rest

const storie = stories[0];
console.log(storie);
const { objectID, ...item } = storie;
console.log(item);
*/



export default App;