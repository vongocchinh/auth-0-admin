import React, { Component } from "react";
import USER from "./../images/USER_MOI.png";
import Category from "./../images/CATEGORY_moi.png";
import Menu from "./../images/menu.png";
import Form from "./../images/form.png";
import { Link } from 'react-router-dom';
// var billImages="https://image.flaticon.com/icons/png/512/1466/1466668.png";
var iconAdmin="https://www.flaticon.com/svg/static/icons/svg/2206/2206368.svg";
var setting ="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png";
export default class menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            updateMenu:false
        }
    }
    onHandleUpdateMenu=()=>{
        this.setState({
            updateMenu:!this.state.updateMenu
        });
    }
    componentDidMount(){
        this.setState({
            updateMenu:localStorage.getItem('updateMenu')
        });
    }
  render() {
    localStorage.setItem('updateMenu',this.state.updateMenu)
    return (
        
      <div className={this.state.updateMenu?"container-left-index2":"container-left-index2-update"}>
     
                <div className="table-menu">
                <ul id="myMenu">
                    <h4 className="menu-text">CORE</h4>
                    <li className="menu-item">
                    <Link to="/" className={this.state.updateMenu?"text-menu-item active-text-menu":"text-menu-item-update active-text-menu"}

                    ><img alt="###" src={USER} />Dashdoard</Link>
                    </li>
                    <div className="overflow-main" id="style-1">
                    <h4 className="menu-text menu-text-h4">INTERFACE</h4>
                    <li className="menu-item">
                        <Link to="/category" 
                        className={this.state.updateMenu?"text-menu-item ":"text-menu-item-update"}
                        ><img alt="###" src={Category} />Quản lý danh mục</Link>
                    </li>
                    <li className="menu-item ">
                        <Link  to ="/categoryAdd"  
                        className={this.state.updateMenu?"text-menu-item ":"text-menu-item-update"}
                        ><img alt="###" src={Form} />Quan lý thêm</Link>
                    </li>
                    <li className="menu-item ">
                        <a href="###" 
                        className={this.state.updateMenu?"text-menu-item ":"text-menu-item-update"}
                        ><img alt="###" src={Menu} />Quản Lý khách hàng</a>
                    </li>
                   
                    {/* <div className="panel">
                        <span>
                             <Link to="/newsletters" >Newsletters</Link>
                             <Link to="/user" >Users</Link>
                             <Link to="/contact" >Contacts</Link>
                        </span>
                    </div>
                    <li className="menu-item ">
                        <a href="###" className="text-menu-item"><img alt="###" src={billImages} />Quản Lý Đơn Hàng</a>
                    </li>
                    <div className="panel">
                        <span>
                             <Link to="/bill" >Đơn hàng</Link>
                             <Link to="/ordered">Đơn hàng đang giao</Link>
                             <Link to="/ordersDelivered" >Đơn hàng đã giao</Link>
                             <Link to="/orderConfirmation">Đơn hàng đã xác nhận</Link>
                        </span>
                    </div> */}
                    </div>

                    <h4 className="menu-text"> MULTI LEVEL EXAMPLE</h4>
                    <li className="menu-item ">
                        <a href="###" 
                        className={this.state.updateMenu?"text-menu-item ":"text-menu-item-update"}
                         ><img alt="###" src={iconAdmin} />Quản lý page</a>
                    </li>
                    <li className="menu-item ">
                        <a href="###" onClick={this.onHandleUpdateMenu}
                        className={this.state.updateMenu?"text-menu-item ":"text-menu-item-update"}
                        ><img className={this.state.updateMenu?"icon-setting":""} alt="###" src={setting} />
                        Background Menu</a>
                    </li>
                    <h4 className="menu-text">LOGGED IN AS:ADMIN</h4>
                </ul>
                </div>
            </div>
    );
  }
}
