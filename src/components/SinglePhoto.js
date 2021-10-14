import React from 'react';
import {Img} from './StyledComponents';

export default function SinglePhoto() {
    const url = localStorage.getItem('currentImg');
    const height = localStorage.getItem('height');
    const width = localStorage.getItem('width');

    return (
            <div className="text-center" >
                <Img src={url} height={height} width={width}/>
            </div>
    )
}