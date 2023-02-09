import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { Data } from './Data'
const Section3 = () => {
    const [name, setname] = useState("");
    const [people, setpeople] = useState(false);
    const [showmodal, setshowmodal] = useState(false)

    const handlesubmit = ((e) => {
        e.preventdefualt();
        if (name) {
            setshowmodal(false)
            setpeople = [...people, { id: new Date().getTime().toString(), name }]
            setname("")
        } else {
            setshowmodal(true)
        }



    })

    return (<>
        {showmodal && <Modal />}
        <form>
            <div className=''>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setname(e.target.value)}
                />
            </div>
            <div >
                <button >click</button>
            </div>
        </form>

    </>);
}

export default Section3;