import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis,CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title ,data,dataKey, grid}) {
    
  return (
    <div className='chart'>
      <h3 className="chartTitle">Analyse Utilisateur </h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#555cobd'/>
                <Line type="monotone" dataKey={dataKey}/>
                <Tooltip/>
                <Legend />
                {grid &&
                <CartesianGrid stroke='#efdfdf' strokeDasharray="#555"/>
                }
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
