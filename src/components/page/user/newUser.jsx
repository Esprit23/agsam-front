import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
      <form action="" method="get" className='newUserForm'>
                
                    <div className=" NewuserItem">
                        <label htmlFor="">Username</label>
                        <input type="text" 
                            placeholder='User_Name'
                            className='userUpdateInpute' />
                     </div>
                     <div className="NewuserItem">
                     <label htmlFor="">Full Name</label>
                        <input type="text" 
                             placeholder='full name'
                            className='userUpdateInpute' />
                     </div>
                     <div className="NewuserItem">
                        <label htmlFor="">Email</label>
                        <input type="text" 
                            placeholder='esprit@gmail.com'
                            className='userUpdateInpute' />
                    </div>
                    <div className="NewuserItem">
                        <label htmlFor="">Adresse</label>
                        <input type="text" 
                            placeholder='mananjary'
                            className='userUpdateInpute' />
                    </div>

            </form>
    </div>
  )
}
