import logo from './logo.svg';
import './App.css';

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

const list = [
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
console.log(list);

const App = () => (
    <div>
      <h1>'My Hacker Stories'</h1>

    <Search />
      
    <hr />

    <List />

    <List />
    </div>
  );


const Search = () => (
  
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    </div>
  );


const List = () => 
  list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> {item.author} </span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));                                              

  
    



export default App;
