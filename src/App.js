import React from 'react';
import Editor from './Editor';
const path = 'https://s3.amazonaws.com/uifaces/faces/twitter/'

const persons = [
  {name: 'John Doe', avatar: `${path}faulknermusic/128.jpg`},
  {name: 'Jane Doe', avatar: `${path}sauro/128.jpg`},
  {name: 'Janie Doe', avatar: `${path}adellecharles/128.jpg`},
  {name: 'John Roe', avatar: `${path}k/128.jpg`},
  {name: 'Jane Roe', avatar: `${path}ashleyford/128.jpg`},
  {name: 'Baby Doe', avatar: `${path}chadengle/128.jpg`},
]
const hashes = [
  {name: 'idea'},
  {name: 'ideal'},
  {name: 'pizza'},
  {name: 'pasta'},
  {name: 'argentina'},
  {name: 'buenos aires'},
]
const relations = [
  {name: 'foodslists.tk - Google doc of foods people eat'},
  {name: 'food/group cooking coordination app for dorms'},
  {name: 'pizzas.pdf - Receipts'},
  {name: 'pasta.doc - Pasta receipts'},
  {name: 'something.tk - Google doc of something'},
  {name: 'johndoe.doc - Resume of John Doe'},
]

const App = () => (
  <div className="App">
    <Editor persons={persons} hashes={hashes} relations={relations} />
  </div>
);

export default App;
