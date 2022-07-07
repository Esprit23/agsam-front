import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {
  const Button =({type})=>{
    return <button className={"widgetButton"+type}>{type}</button>
  };
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Dernier Ajout</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Libelle</th>
          <th className='widgetLgTh'>Descripton</th>
          <th className='widgetLgTh'>Carcteristique</th>
          <th className='widgetLgTh'>data Ajout</th>
          <th className='widgetLgTh'>statu</th>
          <th className='widgetLgTh'>photo</th>
        </tr>
        <tr className="widgetLgtr">
          <td  className="widgetLgArticle">
            Pc toshiba
          </td>
          <td className="widgetLgDesc">ordinateur</td>
          <td className="widgetLgCarct">Portable</td>
          <td className="widgetLgDate">2-juin-2022</td>
          <td className="widgetLgStatu"><Button type="enable"/></td>
          <td className="widgetLgPhoto">photo</td>
        </tr>
        <tr className="widgetLgtr">
          <td  className="widgetLgArticle">
            Pc toshiba
          </td>
          <td className="widgetLgDesc">ordinateur</td>
          <td className="widgetLgCarct">Portable</td>
          <td className="widgetLgDate">2-juin-2022</td>
          <td className="widgetLgStatu"><Button type="disable"/></td>
          <td className="widgetLgPhoto">photo</td>
        </tr>
        <tr className="widgetLgtr">
          <td  className="widgetLgArticle">
            Pc toshiba
          </td>
          <td className="widgetLgDesc">ordinateur</td>
          <td className="widgetLgCarct">Portable</td>
          <td className="widgetLgDate">2-juin-2022</td>
          <td className="widgetLgStatu"><Button type="enable "/></td>
          <td className="widgetLgPhoto">photo</td>
        </tr>
        <tr className="widgetLgtr">
          <td  className="widgetLgArticle">
            Pc toshiba
          </td>
          <td className="widgetLgDesc">ordinateur</td>
          <td className="widgetLgCarct">Portable</td>
          <td className="widgetLgDate">2-juin-2022</td>
          <td className="widgetLgStatu"><Button type="enable "/></td>
          <td className="widgetLgPhoto">photo</td>
        </tr>
        <tr className="widgetLgtr">
          <td  className="widgetLgArticle">
            Pc toshiba
          </td>
          <td className="widgetLgDesc">ordinateur</td>
          <td className="widgetLgCarct">Portable</td>
          <td className="widgetLgDate">2-juin-2022</td>
          <td className="widgetLgStatu"><Button type="enable "/></td>
          <td className="widgetLgPhoto">photo</td>
        </tr>
      </table>
    </div>
  )
}
