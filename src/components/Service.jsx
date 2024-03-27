import React, { useEffect } from 'react'

function Service() {
    useEffect(() => {
        console.log('Service components is Created !!');
        return () => {
            console.log('Service components is deleted !!');
        }
    })

    return (
        <div>Service</div>
    )
}

export default Service