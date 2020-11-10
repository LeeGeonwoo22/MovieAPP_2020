import React from 'react' ;

function Food(props) {
return <h1>I like { props.fav}</h1>;
}

function App() {
  return (
  <div>
    <h1>Hello World !!</h1>
    <Food fav='kimchi'  />
    <Food fav='ramen' />
    <Food fav='samgiopsal' />
    <Food fav='chukumi' />
    
    </div>
  );
}

export default App;
