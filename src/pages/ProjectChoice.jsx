import React, { useState, useEffect } from 'react';
import JsonContainer from '../components/JsonContainer';

function ProjectChoice() {
   const [jsonData, setJsonData] = useState([]);

   useEffect(() => {
    fetch('/project-data.json')
    .then((response) => response.json())
    .then((data) => setJsonData(data))
    .catch((error) => console.error('Error fetching data: ', error));
   }, []);

    return (
        <div>
           <JsonContainer jsonData={jsonData} />
        </div>
    );
}

export default ProjectChoice;