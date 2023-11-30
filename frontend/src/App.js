import './App.css';
import {Upload} from "./upload/Upload"

function App() {
  const url =process.env.REACT_APP_GET_VIDEOS
  console.log(url);
  return (
    <div className="App">
      <Upload/>
   
    </div>
  );
}

export default App;
