import React from 'react';
import CardProjects from '../CardProjects/CardProjects';

function MainProjects( {jsonData} ) {
    return (
        <div>
            {jsonData.map((item, index) => (
                <CardProjects key={index} data={item} />
            ))}
        </div>
    );
}

export default MainProjects;