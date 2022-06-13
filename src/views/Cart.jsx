import React from 'react'

export const Cart = () => {
	return (
		<div className="container">
			<div className="row mt-4">
				<div className="col-9">
					<div className="panel panel-info">
						<div className="panel-heading">
							<div className="panel-title">
								<div className="row">
									<div className="col-6">
										<i className="fa fa-shopping-cart" aria-hidden='true'></i>
									    Shopping Cart
										{/* <Link href='/shop' className="btn btn-outline-ino btn-sm pull-right"> Continue Shoppin</Link> */}
									</div>
									<div className="col-6">
										<button type="submit" className="btn btn-primary btn-sm btn-block">
											<span className="glyphicon glyphicon-share-alt"></span> Continue shopping
										</button>
									</div>
								</div>
							</div>
						</div>
						<hr />
						<div className="card-body">
							<div className="row">
								<div className="col-2"><img className="img-responsive" src="" />
								</div>
								<div className="col-4">
									<h4 className="product-name"><strong></strong></h4><h4><small></small></h4>
								</div>
								<div className='col-12 col-sm-12 text-sm-center col-md-4 text-md-right now'>
									<div className='row'>
										<div className="col-3 col-sm-3 col-md-6 text-md-right" styel={{ paddingTop: '5px' }}>
											<h6><strong>15.99 <span className="text-muted">x</span></strong></h6>
										</div>
											<div className="col-4 col-sm-4 col-md-4">
												<div className='quantity'>
													<input type="number" step="1" max="99" min="1" defaultValue="1" title="Qty" className='qty' size="4" />
												</div>
											</div>
											<div className="col-2 col-sm-2 col-md-2 text-right">
                            <button type="button" className="btn btn-link btn-">
                                <span className="glyphicon glyphicon-trash"> </span>
                            </button>
                        </div>
                    </div>
				</div>
			</div>
							<hr />
							<div className="card-footer">
								<div className="row">
									<div className="col-3">
										<button type="submit" className="btn btn-primary btn-sm btn-block">
											Update Cart
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="panel-footer">
							<div className="row text-center">
								<div className="col-9">
									<h4 className="text-right">Total <strong></strong></h4>
								</div>
								<div>
									<form action="">
										<button type="submit" className="btn btn-success btn-block mt-5">
											Checkout
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		</div >


	)
}
