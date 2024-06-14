import React from 'react'
import {useState, useEffect } from 'react';
function Showres() {
    const [data, setData] = useState([{}]);
   const [loading, setLoading] = useState(true);
    useEffect(() => {
       fetch("/api/submit").then(
        res => res.json()
       ).then(
        data => {
            setData(data)
            console.log(data);
        }
       )

    }, []);
  return (
    <div>
       {(typeof data.sample === 'undefined') ? (
        <p>Load</p>
       ) : (
        data.sample.map((sample , i) =>(
            <p key={i}>{sample}</p>
        ))
       )}
  </div>

  )
}

export default Showres