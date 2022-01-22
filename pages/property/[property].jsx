import React from 'react';
import { useRouter } from 'next/router';


const Property = () => {
    const { query: {property} } = useRouter();
    console.log({property});
    return (
        <h2>Router</h2>
    )
};

export default Property;
