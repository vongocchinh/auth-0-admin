import React, { Component } from 'react'


 class category extends Component {
     
    render() {
        return (
            <div className="main-right">
            <div className="main-content-table">
                <div className="form-top-product">
                    <div className="text-left">
                        <p className="table-text"><i style={{color:"black"}} className="far fa-calendar-alt" /> Danh Sách Category</p>
                    </div>
                    <div className="form-input-search-product">
                    </div>
                </div>
                <div className="hidden-table">
                <table className="table-main">
                    <thead>
                        <tr>
                            <th className="th-main-table-i">ID</th>
                            <th className="th-main-table-n">Tên Danh Mục</th>
                            <th className="th-main-table-n">Chú thích</th>
                            <th className="th-main-table-s">options</th>
                        </tr>
                    </thead>
                   {this.props.show}
                </table>
                </div>
                <div className="pagination-button">
                </div>
            </div>
        </div>
        )
    }
}
export default (category);