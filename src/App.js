import { click } from '@testing-library/user-event/dist/click';
import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import './App.css';

function App() {

  const story = <div className='story greyTitle'>Сказочное заморское явство</div>
  const title = <div className='title'>Нямушка</div>
  const circle = <div className='circle'></div>
  let id = ''
  let id2 = ''
  function clickBuy(e, e2) {
    id = e
    id2 = e2
    console.log(id+' '+id2)
  }
  function outBuy() {
    if (id) {
      document.getElementById(id).classList.toggle('pinck')
      document.getElementById(id2).classList.toggle('pinck')
    }
      id = ''
      id2=''
  }

  return (
    <div className="App">
      <div className='catContainer'>
        Ты сегодня покормил кота?
      </div>
      <div className='container'>
        <div className='bigBox'>
          <div className='shadovBox'
            onClick={()=>clickBuy(1, 11)}
            onMouseOut={()=>outBuy()}
          >
          </div>
          <div id='1' className='borderBox'>
            <div className='box'>
              {story}
              {title}
              <div className='food'>с фуа-гра</div>
              <div className='mouse greyTitle'>10 порций
                <br />
                мышь в подарок</div>

              <div className='img'>
                <div id='11' className='circle'>
                  <div className='textKg'>0,5
                    <div className='Kg'>кг</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='happy'>Чего сидишь? Порадуй котэ, <div className='buy'
            onClick={()=>clickBuy(1, 11)}
            onMouseOut={()=>outBuy()}
            >купи</div>
            <div className='point'>.</div></div>
        </div>
        <div className='bigBox'>
          <div className='shadovBox'
            onClick={()=>clickBuy(2, 22)}
            onMouseOut={()=>outBuy()}
          >
          </div>
          <div id='2' className='borderBox'>
            <div className='box'>
              {story}
              {title}
              <div className='food'>с рыбой</div>
              <div className='mouse greyTitle'>40 порций
                <br />
                2 мыши в подарок</div>

              <div className='img'>
                <div id='22' className='circle'>
                  <div className='textKg'>2
                    <br />
                    <div className='Kg'>кг</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='happy'>Чего сидишь? Порадуй котэ, <div className='buy'
            onClick={()=>clickBuy(2, 22)}
            onMouseOut={()=>outBuy()}
            >купи</div>
            <div className='point'>.</div></div>
        </div>
        <div className='bigBox'>
          <div className='shadovBox'
            onClick={()=>clickBuy(3, 33)}
            onMouseOut={()=>outBuy()}
          >
          </div>
          <div id='3' className='borderBox'>
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
                <div id='33' className='circle'>
                  <div className='textKg'>5
                    <br />
                    <div className='Kg'>кг</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='happy'>Чего сидишь? Порадуй котэ, <div className='buy'
            onClick={()=>clickBuy(3, 33)}
            onMouseOut={()=>outBuy()}
            >купи</div>
            <div className='point'>.</div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
