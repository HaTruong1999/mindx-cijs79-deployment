import './App.css';


function Header() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <label style={{marginRight: 10}}>Task: </label>
        <input style={{marginRight: 10}}></input>
        <button>Add haha</button>
      </div>
      <hr></hr>
    </div>
  );
}

function Body() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ul>
        <li>Go to school</li>
        <li>Make dinner</li>
        <li>Play soccer</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <h3>3 task</h3>
      <h3>Made by MindX</h3>
    </div>
  );
}

function App() {
  return (
    <div style={{marginTop: '50px', marginLeft: '100px' }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
