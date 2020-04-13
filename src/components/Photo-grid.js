import React from 'react';
import styled from 'styled-components';
import PhotoCard from './Photo-card';

const Div = styled.div `
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-wrap: wrap; 
        padding: 30px; 
`

const PhotoGrid = ({feed}) => {
    return (
        <Div>
           {
               feed.map((foto,i) => 
               <PhotoCard 
               key={i}
               photo={foto.source}
                />
               )
           }
        </Div>
    );
};

export default PhotoGrid;