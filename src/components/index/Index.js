import React, { Component } from 'react'
import LogoIcon from './../layout/icon';
import CountProduct from './../layout/CountProduct';
// import Chart from './../layout/chart/chart';
import Bill from './../layout/bill/bill';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    
    render() {
        return (
            < >
                        <div className="main-right">
                        
                            <CountProduct/>
                            {/* <Chart/> */}
                            <Bill/>
                            <LogoIcon/>
                        </div>
                </>
        )
    }
}
