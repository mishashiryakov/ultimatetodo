import React from 'react';
import withHocs from './StarredHoc';

const Starred = ({ theme }) => {
    return (
        <div>Starred</div>
    )
}

export default (withHocs(Starred));