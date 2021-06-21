
import myvideo from './vid/myvideo.mp4'

function App() {
  return (
    <div className='container'>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
        <h1 className="title red">Sarra FATTNASSI</h1>
        <img className="img-fluid" src="/imgs/01.jpg" alt = 'img1'/>
        <img  className="img-fluid" src="/imgs/02.jpeg" alt ='img 2'/>
      </div>
          <video width="320" height="240" controls>
          <source src={myvideo} type="video/mp4" />
          </video>
    </div>
);
}
 export default App;
