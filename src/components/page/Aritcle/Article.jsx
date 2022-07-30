import Publish from '@mui/icons-material/Publish'
import React from 'react'
import { Link } from 'react-router-dom'
import { dataArticle } from '../../../dataUser'
import Chart from '../../charts/chart'
import "./article.css"

export default function Article() {
  return (
    <div className='article'>
        <div className="articleTitlecontenair">
            <h1 className="aritcleTitle">
                ARTICLE
            </h1>
            <Link to="/ajoutArticle">
                <button className="articleAddButton">crée</button>
            </Link>
        </div>
        <div className="articleTop">
            <div className="articleTopLeft">
                <Chart data={dataArticle} dataKey="Article crée" title="stat Article"/>
            </div>
            <div className="aritcleTopRigth">
                <div className="ArticleInfo">
                    <img src="https://th.bing.com/th/id/OIP.yu2dgn97qHZtH2aBCppfHwHaHa?w=209&h=210&c=7&r=0&o=5&pid=1.7"
                     alt="" className="articleImg" /> 
                    <span className="articleName">Pc Toshiba</span> 
                </div>
                <div className="articleInfoBottom">
                <div className="articleInfoItem">
                <div className="articleInfoKey">Id:</div>
                <div className="articleInfoValue">123</div>
            </div>
            <div className="articleInfoItem">
                <div className="articleInfoKey">code:</div>
                <div className="articleInfoValue">p123</div>
            </div>
            <div className="articleInfoItem">
                <div className="articleInfoKey">Libelle:</div>
                <div className="articleInfoValue"> laptopToshiba</div>
            </div>
            <div className="articleInfoItem">
                <div className="articleInfoKey">desription:</div>
                <div className="articleInfoValue">Noir </div>
            </div>
            <div className="articleInfoItem">
                <div className="articleInfoKey">caracteristique:</div>
                <div className="articleInfoValue">7em generation double graph</div>
            </div>
            <div className="articleInfoItem">
                <div className="articleInfoKey">type</div>
                <div className="articleInfoValue">laptop</div>
            </div>
            <div className="articleInfoItem">
                <div className="articleInfoKey">QRcode</div>
                <img src='' className="articleInfoValue"/>
            </div>
                </div>
            
            </div>
            
        </div>
        
      
        <div className="articleBottom">
            
                    <form action="" className="articleForm">
                        <div className="articleFormLeft">
                            <label htmlFor="code"> Code</label>
                            <input type="text" />
                            <label htmlFor="">Libelle</label>
                            <input type="text" />
                            <label htmlFor="">description</label>
                            <input type="text" />
                            <label htmlFor="">caracteristique</label>
                            <input type="text" />
                            <label htmlFor="type">Type</label>
                            <select name="" id="type">
                                <option value="id">fk-type-id</option>
                                <option value="id1">fk-type-id</option>
                            </select>

                        </div>
                        <div className="articleFormRight">
                            <div className="articleUpload">
                            <img src="https://th.bing.com/th/id/OIP.yu2dgn97qHZtH2aBCppfHwHaHa?w=209&h=210&c=7&r=0&o=5&pid=1.7"
                                 alt="" className="articleImgMAJ" /> 
                            <label htmlFor="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>

                            </div>
                            <button className="articleBtn">
                                Mise à Jour
                            </button>
                        </div>
                    </form>
                </div>
    </div>
  )
}
