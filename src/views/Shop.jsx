import React from 'react'
// import { useEffect } from 'react';

export const Shop = () => {
    return (
        <div className="card-deck">
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com" alt="Product Image" />
                    <div className='card-header'>
                        <h5>
                            Product Name
                            <span className='float-right'>Price</span>
                        </h5>
                    </div>
                    <div className="card-body">
                        <img className="img-fluid" src="http://via.placeholder.com/500X500" alt="Product Image" />
                    </div>
                    <div className='card-footer'>
                    <button type="submit" className="btn btn-primary">Add Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
