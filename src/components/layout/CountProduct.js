import React, { Component } from 'react'

export default class CountProduct extends Component {
    render() {
        return (
            <div className="row">
                            <div className="col">
                            <div className="col-main col-main0">
                                <h4>Khách Hàng Contact</h4>
                                <hr />
                                <a className="detail-logo-main" href="###">
                                <i className="far fa-grin-alt" />
                                <p>15 →</p>
                                </a>
                            </div>
                            </div>
                            <div className="col">
                            <div className="col-main col-main1">
                                <h4>Tổng Khách Hàng</h4>
                                <hr />
                                <a className="detail-logo-main" href="###">
                                <i className="far fa-user" />
                                <p>100 →</p>
                                </a>
                            </div>
                            </div>
                            <div className="col">
                            <div className="col-main col-main2">
                                <h4>Tổng Sản Phẩm</h4>
                                <hr />
                                <a className="detail-logo-main" href="###">
                                <i className="fas fa-chart-pie" />
                                <p>800 →</p>
                                </a>
                            </div>
                            </div>
                            <div className="col">
                            <div className="col-main col-main3">
                                <h4>Tổng Đơn Hàng</h4>
                                <hr />
                                <a className="detail-logo-main" href="###">
                                <i className="fas fa-shopping-cart" />
                                <p>300 →</p>
                                </a>
                            </div>
                            </div>
                        </div>
        )
    }
}
