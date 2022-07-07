import React from 'react'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../charts/chart'
import { dataUser } from '../../../dataUser'
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSm from '../../widgetSm/WidgetSm'
import "./Home.css"
export default function Home() {
  return (
    <div className='Home'>
      <FeaturedInfo/>
      <Chart data={dataUser} title="Analyse d'utilisateur" dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
