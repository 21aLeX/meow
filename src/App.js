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
          <div className='mouse greyTitle'>10 порций
          <br/>
          мышь в подарок</div>
          <div className='boxImg'>

          <div className='img'></div>
          </div>
        </div>
        <div className='box'>
          {story}
          {title}
          <div className='food'>с рыбой</div>
          <div className='mouse greyTitle'>40 порций
          <br/>
         2 мыши в подарок</div>
          <div className='boxImg'>

          <div className='img'></div>
          </div>
        </div>
        <div className='box'>
          {story}
          {title}
          <div className='food'>с курой</div>
          <div className='mouse greyTitle'>100 порций
          <br/>
         5 мышей в подарок
          <br/>
          заказчик доволен
          </div>
          <div className='boxImg'>

          <div className='img'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
