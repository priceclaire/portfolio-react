import React, { useState, useEffect } from 'react';
import MainProjects from '../components/MainProjects/MainProjects';

function ProjectsAll() {
   const [jsonData, setJsonData] = useState([]);

   useEffect(() => {
    fetch('/project-data.json')
    .then((response) => response.json())
    .then((data) => setJsonData(data))
    .catch((error) => console.error('Error fetching data: ', error));
   }, []);

    return (
        <div>
           <MainProjects jsonData={jsonData} />
        </div>
    );
}

export default ProjectsAll;