import React from 'react';
import FooterCard from './FooterCard';
import FooterStandartCard from './FooterStandrtCard';

const BigBox = () => {
    return (
        <div className='bigBox'>
            <FooterStandartCard />
            <FooterCard/>
        </div>
    );
};

export default BigBox;