import './app.css'
import Header from './components/Header'

function App() {
  var data="data large"
  return (
    <div>
      <h1 className='hello'>Hello world </h1>
      <p>hey man</p>
      <Header sent={data}/>
     
    </div>




  );
}

export default App;

