import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { withStyles } from '@material-ui/styles';
import styles from './styleProfile/styles';
// import JSONPretty from 'react-json-pretty';

const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const {classes}=props;
  return (
    isAuthenticated && (
    <div className="main-right">
             <div className="">
                <p className="table-text"><i style={{color:"black"}} className="far fa-calendar-alt" /> UserAdmin</p>
                <div className="hidden-table">

                        <div className={classes.accountAdminContainer}>
                            <div className={classes.accountAdmin}>
                                <div className={classes.titleImagesAdmin}>
                                    <img
                                    className={classes.titleImagesAdminImg}
                                        src={user.picture?user.picture:"https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"} 
                                        alt="admin"/>
                                </div>

                                <div className={classes.titleNameAdminHello}>
                                        <p className={classes.titleNameAdminHelloP}><strong>Xin Chào</strong>:
                                            <u>{user.name===''?" Admin":user.name}</u>
                                        </p>
                                        <p className={classes.titleNameAdminHelloP}>{user.email}</p>
                                </div>

                            </div>
                            <div className={classes.accountAdminForm}>
                                <form >
                                    <p className={classes.titleAccountAdmin}>userEmail:</p>
                                        <div className={classes.inputAccountAdmin} >{user.email}</div>
                                    <p className={classes.titleAccountAdmin}>FirstName</p>
                                        <div className={classes.layoutAdminFromInput}>
                                            <input  name="displayName" defaultValue={user.family_name}   className={classes.layoutInputAccountAdmin}/>
                                            <input  name="lastName" defaultValue={user.given_name} className={classes.layoutInputAccountAdmin}/>
                                        </div>
                                </form>
                            </div>
                        </div>
                </div>
                </div>
            </div>
    )
  )
}

export default withStyles(styles) (Profile);