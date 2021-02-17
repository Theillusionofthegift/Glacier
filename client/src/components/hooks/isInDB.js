import { useState, useEffect } from 'react';
import axios from 'axios'

export default function useDBstatus(Auth0ID) {
    const [doesExist, setdoesExist] = useState(false)

    const requestConfig = {
        url: `http://localhost:4000/api/v1/users/${Auth0ID}`,
        method: "get",
        headers: { "Content-Type": "application/json" },
    };

    axios(requestConfig)
        .then((response) => {
            if (response.status == 200) {
                setdoesExist(true);
                console.log(`User Exists`);
            } else {
                console.log('User Not Found')
            }
        })
        .catch((err) => {
            console.log(`We should really handle the error: ${err}`);
        });



    return doesExist;
}
