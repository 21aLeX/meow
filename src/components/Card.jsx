import React from 'react';

const Card = (props) => {
    const story = <div className='story greyTitle'>Сказочное заморское явство</div>
  const title = <div className='title'>Нямушка</div>
  const circle = <div className='circle'></div>
  console.log(props.Id)
    return (
        <div className='bigBox'>
          <div className='shadovBox'
            // onClick={()=>clickBuy(1, 11)}
            // onMouseOut={()=>outBuy()}
          >
          </div>
          <div id={props.Id[0]} className='borderBox'>
            <div className='box'>
              {story}
              {title}
              <div className='food'>{props.Name}</div>
              <div className='mouse greyTitle'>{props.portion}
                <br />
                {props.mouse}
                <br />
                {props.happy}
                </div>

              <div className='img'>
                <div id={props.Id[1]} className='circle'>
                  <div className='textKg'>0,5
                    <div className='Kg'>кг</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='happy'>
            Чего сидишь? Порадуй котэ, <div className='buy'
            // onClick={()=>clickBuy(1, 11)}
            // onMouseOut={()=>outBuy()}
            >купи</div>
            <div className='point'>.</div></div>
            <div className='happy disabled'>
            Печень утки разварная с артишоками.
            </div>
        </div>
    );
};

export default Card;