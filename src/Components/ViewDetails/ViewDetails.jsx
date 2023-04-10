import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const ViewDetails = ({data}) => {
    const {id} = useParams();
    // const item = data.find(items => items.id === id)
    console.log(data);
    console.log(id);
    

    return (
        <div>
            <h1>i am</h1>
        </div>
    );
};

export default ViewDetails;