import React from "react";

const Home = () => {
    return (
        <div className="main">
            <div className="AddToCard">
                <img src="https://cdn-icons-png.flaticon.com/512/62/62910.png"></img>
            </div>
            <div>
                <h1>Home component</h1>
            </div>
            <div className="cart">
                <div className="cart-wrapper">
                    <div className="img-wrapper items">
                        <img src="https://cdn1.smartprix.com/rx-iEfM9LzwK-w420-h420/realme-c35-6gb-ram-1.webp"></img>
                    </div>
                    <div className="text-wrapper items">
                        <span>
                            iphone
                        </span>
                        <span> Price: 800$</span>
                    </div>
                    <div className="btn-wrapper items">
                        <button>Add to cart</button>
                    </div>
                </div>
                <div className="cart-wrapper">
                    <div className="img-wrapper items">
                        <img src="https://cdn1.smartprix.com/rx-iEfM9LzwK-w420-h420/realme-c35-6gb-ram-1.webp"></img>
                    </div>
                    <div className="text-wrapper items">
                        <span>
                            iphone
                        </span>
                        <span> Price: 800$</span>
                    </div>
                    <div className="btn-wrapper items">
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home;