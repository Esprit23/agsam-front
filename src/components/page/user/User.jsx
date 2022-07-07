import React from 'react'
import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import CreatUser from './CreatUser';

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Modifier Utilisateur</h1>
        <CreatUser className="userAddButton"/>
      </div>
      <div className="UserContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img className='userShowimg'
                src="https://th.bing.com/th/id/R.ed47fbc01a3e897b6ddbd6618aba7f9c?rik=pEDTuTz1mGsFkw&riu=http%3a%2f%2fwww.imagespourtoi.com%2flesimages%2ftiteuf%2fphoto-titeuf-7.jpg&ehk=3j0IDVVofdvvCCDbfHS4E6Zm%2f0ExTehk9TJYWzmOYUs%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Esprit franck</span>
                    <span className="userShowUserType">Admin</span>
                </div>
            </div>
            <div className="userShowBotton">
            <span className="userShowTitle">Detail</span>
                <div className="usershowInfo">
                    <PermIdentityIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">maska23</span>
                </div>
                <div className="usershowInfo">
                    <PhoneAndroidIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">0345366872</span>
                </div>
                <div className="usershowInfo">
                    <EmailIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">espritf@gmail</span>
                </div>
                <div className="usershowInfo">
                    <PermIdentityIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">mananjary</span>
                </div>
                
             </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Modifier</span>
            <form action="" method="get" className='userUpdateForm'>
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label htmlFor="">Username</label>
                        <input type="text" 
                            placeholder='maska23'
                            className='userUpdateInpute' />
                     </div>
                     <div className="userUpdateItem">
                     <label htmlFor="">Full Name</label>
                        <input type="text" 
                            placeholder='maska23'
                            className='userUpdateInpute' />
                     </div>
                     <div className="userUpdateItem">
                        <label htmlFor="">Email</label>
                        <input type="text" 
                            placeholder='esprit@gmail.com'
                            className='userUpdateInpute' />
                    </div>
                    <div className="userUpdateItem">
                        <label htmlFor="">Adresse</label>
                        <input type="text" 
                            placeholder='mananjary'
                            className='userUpdateInpute' />
                    </div>
                   
                </div>
                <div className="userUpdateRight">
                        <div className="userUpdateUploade">
                        <img className='userUpdateimg'
                            src="https://th.bing.com/th/id/R.ed47fbc01a3e897b6ddbd6618aba7f9c?rik=pEDTuTz1mGsFkw&riu=http%3a%2f%2fwww.imagespourtoi.com%2flesimages%2ftiteuf%2fphoto-titeuf-7.jpg&ehk=3j0IDVVofdvvCCDbfHS4E6Zm%2f0ExTehk9TJYWzmOYUs%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <label htmlFor="file"><PublishIcon/></label>
                        <input type="file" style={{display:"none"}} id="file" />
                        </div>
                        <button className="userUpdateButton">
                            Modifier
                        </button>
                    </div>
            </form>
        </div>
      </div>
    </div>
  )
}
