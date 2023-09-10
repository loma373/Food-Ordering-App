import React from 'react'

export default function Card() {
    return (
        <div className="card m-2" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">text here</p>
                <div className='container w-100'>
                    <select className='m-1 h-100 bg-success rounded'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + 1} </option>
                            )
                        })}
                    </select>
                    <select className='m-1 h-100 bg-success rounded'>
                        <option value="half"> Half </option>
                        <option value="full"> Full </option>
                    </select>
                    <div className='d-inline fs-5'>
                        Total Price
                    </div>
                </div>
            </div>
        </div>
    )
}
