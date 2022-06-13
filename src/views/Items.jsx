import React from 'react'

export const Items = () => {
    return (
        <div className="card-deck">
            <div className="col-md-4 mt-3">
                <div className="card">
                    <img className="card-img-top" src="holder.js/100x180/" alt="" />
                    <div className='card-header'>
                        <h5>
                            Product Name
                            <span className='float-right'>15.99</span>
                        </h5>
                    </div>
                    <div className="card-body">
                        <img className="img-fluid " src="http://via.placeholder.com/500x500" alt="Product Image" />
                    </div>
                    <div className='card-footer'>
                        <button type="submit" className="btn btn-primary btn-block">Add Item</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="holder.js/100x180/" alt="" />
                    <div className='card-header'>
                        <h5>
                            Product Name
                            <span className='float-right'>15.99</span>
                        </h5>
                    </div>
                    <div className="card-body">
                        <img className="img-fluid " src="http://via.placeholder.com/500x500" alt="Product Image" />
                    </div>
                    <div className='card-footer'>
                        <button type="submit" className="btn btn-primary btn-block">Add Item</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="holder.js/100x180/" alt="" />
                    <div className='card-header'>
                        <h5>
                            Product Name
                            <span className='float-right'>15.99</span>
                        </h5>
                    </div>
                    <div className="card-body">
                        <img className="img-fluid " src="http://via.placeholder.com/500x500" alt="Product Image" />
                    </div>
                    <div className='card-footer'>
                        <button type="submit" className="btn btn-primary btn-block">Add Item</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
