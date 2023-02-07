import React, { useState, useEffect } from 'react';
const Apidata = "https://api.github.com/users"

const Section1 = () => {
    const [user, setuser] = useState([]);
    const getdata = async () => {
        const response = await fetch(Apidata);
        const users = await response.json();
        setuser(users);
        console.log(users);
    }
    useEffect(() => {
        getdata()
    }, [])
    return (<>
        {
            user.map((item) => {
                const { id } = item;
                return (
                        <p className='ppp' style={{display:'inline'}}>{id}</p>
                )
            })
        }
    </>);
}

export default Section1;