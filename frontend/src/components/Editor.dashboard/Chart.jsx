import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

const state = {
    labels: ['Approved', 'Pending', 'Rejected'
             ],
    datasets: [
      {
       
        backgroundColor: [
            "rgb(60,186,159,0.1)",
            "rgb(255,165,0,0.1)",
            "rgb(196,88,80,0.1)",
        ],
         data: [65, 59, 80],
            borderColor:[
                "#3cba9f",
                "#ffa500",
                "#c45850",
            ],
            hoverBackgroundColor: [
                "rgb(60,186,159,0.1)",
                "rgb(255,165,0,0.1)",
                "rgb(196,88,80,0.1)",
                ],
            borderWidth:2,
      }
    ]
}
  
const state_1 = {
    labels: ['January', 'February', 'March','April' ,'May' ,'June' ,'July','August' ,'September' ,'October' ,'November','December'
],
    datasets: [
        {
          label: 'Monthly added number of notices',
          backgroundColor: [
              "rgb(60,186,159,0.1)",
              
          ],
           data: [65, 59, 80,5,10,25,30, 1, 3,15,31,21],
              borderColor:[
                  "#3cba9f",
                  
              ],
              hoverBackgroundColor: [
                  "rgb(60,186,159,0.1)",
                  
                  ],
              borderWidth:2,
        }
      ]
    

}
const NoticesChart = () => {
    return (
      <div className="NoticesChart">
        <div className="chart_head">
        <h3 style={{fontSize:'17px',textAlign:'left',margin:'0px 200px 40px 15px',fontWeight:'lighter'}}>Notices appproval</h3>
            </div>
            <div className="chart">
            <Doughnut
          data={state}
          options={{
            title:{
              display: true,
             
              fontSize:100
            },
            legend:{
              display:true,
              position:'right'
              },
              maintainAspectRatio: false 
          }}
        />
            
        </div>
        <div className="chart_head">
        <h3 style={{fontSize:'17px',textAlign:'left',margin:'0px 20px 40px 15px',fontWeight:'lighter'}}>Notices added this Year</h3>
        </div>
            <div>
        <Bar  className="chart_1"
          data={state_1}
          options={{
            title:{
              display:true,
              
              fontSize:50
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>

            

        </div>);
}
 
export default NoticesChart;