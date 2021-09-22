import React from 'react'

function Home() {
    return (
        <div>
            <h1>Home Componet</h1>
            <div className="card-wrapper">
                <div className="img-wrapper item">
                    <img src="https://live.staticflickr.com/65535/51503113420_f94728882c_w.jpg" alt="" />
                </div>
                <div className="text-warpper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add TO Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
