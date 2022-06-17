import './App.css';

function App() {

  const story = <div className='story greyTitle'>Сказочное заморское явство</div>
  const title = <div className='title'>Нямушка</div>

  return (
    <div className="App">
      <div className='container'>
        <div className='box'>
          {story}
          {title}
          <div className='food'>с фуа-гра</div>
          <div className='mouse greyTitle'>10 порций мышь 
          <br/>
          в подарок</div>
          <div className='img'></div>
        </div>
        <div className='box'>
          {story}
          {title}
          <div className='food'>с рыбой</div>
        </div>
        <div className='box'>
          {story}
          {title}
          <div className='food'>с курой</div>
        </div>
      </div>
    </div>
  );
}

export default App;
