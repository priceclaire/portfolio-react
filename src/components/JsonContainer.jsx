import React from 'react';
import CardProjectsAll from './CardProjectsAll';

function JsonContainer( {jsonData} ) {
    return (
        <div>
            {jsonData.map((item, index) => (
                <CardProjectsAll key={index} data={item} />
            ))}
        </div>
    );
}

export default JsonContainer;