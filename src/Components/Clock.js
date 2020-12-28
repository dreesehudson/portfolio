import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function Clock() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            count()
        }, 1000);
        return () => clearInterval(interval)
    }, []);


    function count() {
        setDate(new Date())
    }


    return (
        <>
            <FontAwesomeIcon className='fa-lg' icon={faClock}/>
            <p className="m-2 text-white"><b>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</b></p>
            <p className="m-2 text-white"><b>{date.toLocaleDateString()}</b></p>
        </>
    );
}


export default Clock;