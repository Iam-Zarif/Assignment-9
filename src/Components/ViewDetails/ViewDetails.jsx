import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id} = useParams();
    console.log(id);
    
    return (
        <div>
            <h1>i am</h1>
        </div>
    );
};

export default ViewDetails;