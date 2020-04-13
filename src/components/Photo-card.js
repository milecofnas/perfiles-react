import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
        width: 280px;
        height: 280px; 
        overflow: hidden;
        padding: 25px;  
        img {
            width: 100%
            height: auto;
        }
              
`

const PhotoCard = ({photo}) => {
    return (
        <Div>
            <img src={photo} alt="foto"/>
        </Div>
    );
};

export default PhotoCard; 