import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Layout , Header,Navigation,Drawer} from 'react-mdl';
import Navbar from '../homeComponent/Navbar';
export class NavbarLayout extends Component {
     

    render() {
        const navSideBer = {
            color:'black',
            fontWeight:'bold',
            textDecoration:'none',
            cursor:'pointer'
          }
          const sideBer = {
            borderRadius:'50%',
            marginLeft:'20%'
          }

        return (
            <div>
               <Layout fixedHeader>
                      <Header style={{background:'green',position:'fixed',width:'100%'}} title="TITLE" >
                        <ul className="NavTtitle">
                          <li className="left">
                            <Link to="/about" style={{textDecoration:'none'}}>ABOUT</Link>
                          </li>
                          <li className="right">
                            <Link to="" style={{textDecoration:'none'}}>ABOUT</Link>
                          </li>
                        </ul>
                      </Header>
                      
                    {/* Navigation bar */}
                    <Navbar />
                    {/* Navigation bar */}
                    
                      <Drawer title="Title"style={{height:'600px',zIndex:'9999'}}>
                          <div>
                            <img src="http://www.getmdl.io/assets/demos/transparent.jpg" width="130px" height="130px" style={sideBer} alt="Image"/>
                          </div>
                          <Navigation style={{}}>
                              <a href="/uploadOrgainzation" style={navSideBer}>Mate Name</a>
                              <a href="/showdata" style={navSideBer}>Mate Account</a>
                              <a href="/uploadVoluteer" style={navSideBer}>Volunteer Name</a>
                              <a href="/showvolunteer" style={navSideBer}>Volunteer Account</a>
                              <a href="/uploadpatient" style={navSideBer}>Patient Withdraw</a>
                              <a href="/showpatient" style={navSideBer}>Withdraw Account</a>
                              <a href="/uploadreturn" style={navSideBer}>Return Amount</a>
                              <a href="/showreturn" style={navSideBer}>Return Account</a>
                              <a href="/uploadpost" style={navSideBer}>Post</a>
                              <a style={navSideBer}>Logout</a>
                          </Navigation>
                      </Drawer>
                  </Layout> 
            </div>
        )
    }
}

export default NavbarLayout
