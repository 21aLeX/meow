import React from 'react';
import Api from './Api';

const Card = (props) => {
  const story = <div className='story greyTitle'>Сказочное заморское явство</div>
  const title = <div className='title'>Нямушка</div>
  return (
    <div className='bigBox'>
      <div className='shadovBox'
        onClick={() => Api.clickBuy(props.Id)}
        onMouseOut={() => Api.outBuy()}
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
              <div className='textKg'>{props.kg}
                <div className='Kg'>кг</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className='happy'>
        Чего сидишь? Порадуй котэ, <div className='buy'
          onClick={() => Api.clickBuy(props.Id)}
          onMouseOut={() => Api.outBuy()}
        >купи</div>
        <div className='point'>.</div></div>
      <div className='happy disabled'>
        {props.footer}
      </div>
    </div>
  );
};

export default Card;