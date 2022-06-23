import { click } from '@testing-library/user-event/dist/click';
import { useEffect } from 'react';
import { useMemo } from 'react';
import './App.css';

function App() {

  const story = <div className='story greyTitle'>Сказочное заморское явство</div>
  const title = <div className='title'>Нямушка</div>
  const circle = <div className='circle'></div>
  let borderBox = 'borderBox'
  let id = ''
  function clickBuy(e) {
    console.log(e)
    id = e
  }
  function outBuy(){
    if(id){
    console.log('ушел')
    // const element = document.getElementById(id)
    borderBox = 'pinck'
    // document.getElementById("id").className+='pinck'
  id=''
  }
  }
  useMemo(()=>{
console.log(borderBox)
  },[id])

  return (
    <div className="App">
      <div className='catContainer'>
        Ты сегодня покормил кота?
      </div>
      <div className='container'>
        <div className='bigBox'>
          <div id='1' className='shadovBox'
           onClick={e => clickBuy(e.target.id)}
          onMouseOut={outBuy}
           >
          </div>
          <div className={borderBox}>
            <div className='box'>
              {story}
              {title}
              <div className='food'>с фуа-гра</div>
              <div className='mouse greyTitle'>10 порций
                <br />
                мышь в подарок</div>

              <div className='img'>
                <div className='circle'>
                  <div className='textKg'>0,5
                    <div className='Kg'>кг</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='happy'>Чего сидишь? Порадуй котэ, <a href='1'>купи</a>
            <div className='point'>.</div></div>
        </div>
        <div className='bigBox'>
          <div className='borderBox'>
            <div className='box'>
              {story}
              {title}
              <div className='food'>с рыбой</div>
              <div className='mouse greyTitle'>40 порций
                <br />
                2 мыши в подарок</div>

              <div className='img'>
                <div className='circle'>
                  <div className='textKg'>2
                    <br />
                    <div className='Kg'>кг</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='happy'>Чего сидишь? Порадуй котэ, <a href='1'>купи</a>
            <div className='point'>.</div></div>
        </div>
        <div className='bigBox'>
          <div className='shadovBox'>
            <div className='borderBox'>
              <div className='box'>
                {story}
                {title}
                <div className='food'>с курой</div>
                <div className='mouse greyTitle'>100 порций
                  <br />
                  5 мышей в подарок
                  <br />
                  заказчик доволен
                </div>

                <div className='img'>
                  <div className='circle'>
                    <div className='textKg'>5
                      <br />
                      <div className='Kg'>кг</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='happy'>Чего сидишь? Порадуй котэ, <a href='1'>купи</a>
            <div className='point'>.</div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
