import React from 'react';

const FooterStandartCard = () => {
    return (
        <div className='happy'>
            Чего сидишь? Порадуй котэ, <div className='buy'
            onClick={()=>clickBuy(1, 11)}
            onMouseOut={()=>outBuy()}
            >купи</div>
            <div className='point'>.</div></div>
    );
};

export default FooterStandartCard;