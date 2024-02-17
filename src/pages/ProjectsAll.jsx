import React, {Component} from 'react';
import data from '../assets/project-data.json';


// Parent

// class Project1 extends Component {
//     render() {
//         const title = data.projects.title;

//         return (
//             <div>
//                 <h1>{title}</h1>
//             </div>
//         );
//     }
// }

function Pro() {
    const title = data.projects.title;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );

}

export default Project;