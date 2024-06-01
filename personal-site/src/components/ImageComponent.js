import React from 'react';

const ImageComponent = ({ src, alt , h, w}) => {
    return (
        <img src={src} alt={alt} height={h} width={w}/>
    );
}