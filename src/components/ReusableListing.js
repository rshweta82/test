import React, { useState, useEffect } from 'react';

import { BASEURL } from '../constants';

function ReusableListing({url, callback}) {
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({});

    // called on update of url
    useEffect(() => {
        // if (meta && meta.pagination.pages )

        //fetch
        fetch(BASEURL + url)
            .then(result => result.json())
            .then(result => {
                setMeta(result.meta)
                setData([...data, ...result.data])
            })
            .catch(e => console.log(e))
    }, [url])
    
    return <React.Fragment>
        {data.map(callback)}
    </React.Fragment>
}

export default ReusableListing;