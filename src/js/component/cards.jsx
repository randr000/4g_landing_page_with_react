import React from 'react';

import Card from './card.jsx';

const Cards = () => {
    
    // return (
    //     <div className="d-flex justify-content-between flex-wrap">
    //         <Card />
    //         <Card />
    //         <Card />
    //         <Card />
    //     </div>
    // );

    return (
        <div className="container-flex">
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Cards;