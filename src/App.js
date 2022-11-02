import './App.css';
import Users from './components/Users';
import AddUsers from './components/AddUsers'

function App() {
  return (
    <div className="App">
      <h1>React Redux CRUD Application</h1>
      <AddUsers />
      <Users />
    </div>
  );
}

export default App;
