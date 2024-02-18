import React from 'react';
import data from '../assets/project-data.json';
import CardProjects from '../components/CardProjects/CardProjects';



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

function Projects() {
    const title = data.projects.title;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );

}

export default Project;