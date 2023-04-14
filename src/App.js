import './App.css';
import FullName from './Profile/Compoment/FullName';
import Bio from './Profile/Compoment/Bio';
import ProfilePhoto from './Profile/Compoment/ProfilePhoto';
function App() {

  return (
    <div className="App">
    <h1>Welcome</h1>
    <FullName name = 'Ahmed'/>
    <ProfilePhoto ProfilePhoto ={ProfilePhoto}/>
    
    </div>
  );
}

export default App;
