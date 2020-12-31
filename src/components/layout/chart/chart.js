import React, { Component } from 'react'
import {Bar,Doughnut } from "react-chartjs-2"
export default class chart extends Component {
    render() {
        return (
            <div className="chart-container">
                <div className="chart-container-left">
                    <Bar className="chart-combo"
                        data={{
                        labels: [
                            "Product",
                            "User",
                            "bill",
                            "contact",
                            "viewPage",
                            "newsletter"
                        ],
                        datasets: [
                            {
                            label: "Tổng:",
                            backgroundColor: [
                                "#4DB6AC",
                                "#00ACC1",
                                "#F27BA3",
                                "#FF9D18",
                                "#5C6BC0",
                                "#666666"
                            ],
                            data: [100, 200,200, 500, 15,75]
                            }
                        ]
                        }}
                        options={{
                        legend: { display: false },
                        title: {
                            display: true,
                            text: "Thống kê cửa hàng"
                        }
                        }}
                    />
                </div>
                <div className="chart-container-right">
                    <Doughnut
                    data={{
                    labels: [
                                "Product",
                                "User",
                                "bill",
                                "contact",
                                "viewPage",
                                "newsletter"
                            ],
                    datasets: [
                        {
                        label: "Thống kê sản phẩm (sp)",
                        backgroundColor: [
                            "#FF7000",
                            "#E91E63",
                            "#3cba9f",
                            "#57BB63",
                            "#FF9877",
                            "#BF457C",
                            
                        ],
                        data: [100, 200,200, 500, 15,75]
                        }
                    ]
                    }}
                    option={{
                    title: {
                        display: true,
                        text: "Thống kê số lượng sản phẩm "
                    }
                    }}
                />
                </div>
            </div>
        )
    }
}
