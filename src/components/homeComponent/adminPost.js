import React, { Component } from 'react'
import '../OrganizationCSS/PostShow.css'
import {Grid,Cell,Button} from 'react-mdl'
export class adminPost extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto',marginTop:'5%',background:'#eee',padding:'5% 0%'}} className="post">
                <p className="title">Lorem Lorem</p>
                <Grid className="demo-grid-1">
                    <Cell col={4} style={{border:'1px solid #ddd',padding:'10px'}}>
                        <div className="profile">
                            <div className="profile_image">
                                <img src="assets/slide3.jpg" width="100%"/>
                            </div>
                            <div className="profile_content">
                                <span>Naung Naung</span><br></br>
                                <span>12-2-2020</span>
                            </div>
                        </div>
                        <hr></hr>
                        <p>loremdjfkfjdlslafjld img elements must have an alt prop, either with meaningful text, or an empty string for decorative i
                        loremdjfkfjdlslafjld img elements must have an alt prop, either with meaningful text, or an empty string for decorative i
                        </p>
                        <img src="assets/slide3.jpg" width="100%" height="300px"/>
                        <hr></hr>
                        <div>
                            <span>23K Like</span>
                            <span className="comments">40 comments</span>
                            <span>50 shares</span>
                        </div>
                        <div className="LikeShare">
                            <Button raised ripple>Like</Button>
                            <Button raised ripple  style={{margin:'0px 10px'}}>Comment</Button>
                            <Button raised ripple>Share</Button>
                        </div>
                    </Cell>
                    <Cell col={4} style={{border:'1px solid #ddd',padding:'10px'}}>
                        <div className="profile">
                            <div className="profile_image">
                                <img src="assets/slide3.jpg" width="100%"/>
                            </div>
                            <div className="profile_content">
                                <span>Naung Naung</span><br></br>
                                <span>12-2-2020</span>
                            </div>
                        </div>
                        <hr></hr>
                        <p>loremdjfkfjdlslafjld img elements must have an alt prop, either with meaningful text, or an empty string for decorative i
                        loremdjfkfjdlslafjld img elements must have an alt prop, either with meaningful text, or an empty string for decorative i
                        </p>
                        <img src="assets/slide4.jpg" width="100%" height="300px"/>
                        <hr></hr>
                        <div>
                            <span>23K Like</span>
                            <span className="comments">40 comments</span>
                            <span>50 shares</span>
                        </div>
                        <div className="LikeShare">
                            <Button raised ripple>Like</Button>
                            <Button raised ripple style={{margin:'0px 10px'}}>Comment</Button>
                            <Button raised ripple>Share</Button>
                        </div>
                    </Cell>
                    <Cell col={4} style={{border:'1px solid #ddd',padding:'10px'}}>
                        <div className="profile">
                            <div className="profile_image">
                                <img src="assets/slide3.jpg" width="100%"/>
                            </div>
                            <div className="profile_content">
                                <span>Naung Naung</span><br></br>
                                <span>12-2-2020</span>
                            </div>
                        </div>
                        <hr></hr>
                        <p>loremdjfkfjdlslafjld img elements must have an alt prop, either with meaningful text, or an empty string for decorative i
                        loremdjfkfjdlslafjld img elements must have an alt prop, either with meaningful text, or an empty string for decorative i
                        </p>
                        
                        <img src="assets/slide4.jpg" width="100%" height="300px"/>
                        <hr></hr>
                        <div>
                            <span>23K Like</span>
                            <span className="comments">40 comments</span>
                            <span>50 shares</span>
                        </div>
                        <div className="LikeShare">
                            <Button raised ripple>Like</Button>
                            <Button raised ripple  style={{margin:'0px 10px'}}>Comment</Button>
                            <Button raised ripple>Share</Button>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default adminPost
