import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='mt-3 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{ width: "20%", margin: "0 auto" }} className='btn btn-primary p-2 fs-5 mt-4 mb-5'>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;