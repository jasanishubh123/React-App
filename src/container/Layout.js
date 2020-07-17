
import React from 'react'
import Navbar from '../component/Navbar'
const Layout = (props) => {

    return (
        <div>
            <Navbar />
            <div className="container-fluid" style={{marginTop:"100px"}}>
                <div className="container">
                        {props.children}
                </div>
                 
            </div>


        </div>
    )

}

export default Layout;