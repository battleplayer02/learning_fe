import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
    let params = useParams()
    return <div className='content'>Product page {params.id} </div>;
}
