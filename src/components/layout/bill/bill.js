import React, { Component } from 'react'

export default class bill extends Component {
    render() {
        return (
            <div className="main-content-table">
                            <p><i className="far fa-calendar-alt" /> Đơn Hàng Mới Nhất</p>
                            <div className="hidden-table">
                            <table className="table-main" >
                                <thead>
                                <tr><th className="th-main-table-i">ID</th>
                                    <th className="th-main-table-np">Tên Sản phẩm</th>
                                    <th className="th-main-table-i">Số Lượng</th>
                                    <th className="th-main-table-d">Ngày Đặt Hàng</th>
                                    <th className="th-main-table-i">Chi tiết</th>
                                </tr></thead>
                                <tbody>
                                <tr>
                                    <td>1234</td>
                                    <td>Iphone 11 max pro 2019 màu trắng</td>
                                    <td>100</td>
                                    <td>14-10-20000</td>
                                    <td>
                                    <a href="###" className="option-table">Chi tiết</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1234</td>
                                    <td>Iphone 11 max pro 2019 màu trắng</td>
                                    <td>100</td>
                                    <td>14-10-20000</td>
                                    <td>
                                    <a href="###" className="option-table">Chi tiết</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1234</td>
                                    <td>Iphone 11 max pro 2019 màu trắng</td>
                                    <td>100</td>
                                    <td>14-10-20000</td>
                                    <td>
                                    <a href="###" className="option-table">Chi tiết</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1234</td>
                                    <td>Iphone 11 max pro 2019 màu trắng</td>
                                    <td>100</td>
                                    <td>14-10-20000</td>
                                    <td>
                                    <a  href="menu.html" className="option-table">Chi tiết</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
        )
    }
}
