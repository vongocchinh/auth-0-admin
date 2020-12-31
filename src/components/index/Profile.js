import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
    <div className="main-right">
             <div className="">
                <p className="table-text"><i style={{color:"black"}} className="far fa-calendar-alt" /> UserAdmin</p>
                <div className="hidden-table">

                        <div className="account-admin-container">
                            <div className="account-admin">
                                <div className="title-images-admin">
                                    <img
                                        src={user.picture?user.picture:"https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"} 
                                        alt="admin"/>
                                </div>

                                <div className="title-name-admin-hello">
                                        <p><strong>Xin Chào</strong>:
                                            <u>{user.name===''?" Admin":user.name}</u>
                                        </p>
                                        <p>{user.email}</p>
                                </div>

                            </div>
                            <div className="account-admin-form">
                            <form >
                            <p className="title-account-admin">userEmail:</p>
                                <div className="input-account-admin" >{user.email}</div>
                            <p className="title-account-admin">FirstName</p>
                                <div className="layout-admin-from-input">
                                    <input  name="displayName" defaultValue={user.family_name}   className="layout-input-account-admin"/>
                                    <input  name="lastName" defaultValue={user.given_name} className="layout-input-account-admin"/>
                                </div>
                                </form>
                            </div>
                        </div>
                </div>
                </div>
                {/* <JSONPretty data={user} /> */}
            </div>
    )
  )
}

export default Profile;