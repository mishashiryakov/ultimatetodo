import React from 'react';
import withHocs from './TomatoTimerHoc';

const TomatoTimer = ({ theme }) => {
    return (
        <div>TomatoTimer</div>
    )
}

export default (withHocs(TomatoTimer));