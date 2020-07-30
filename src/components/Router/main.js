import React from 'react';
import AboutPage from '../AboutPage/AboutPage'
import SliderShow from '../homeComponent/PostShow'
import adminPost from '../homeComponent/adminPost'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import UploadData from '../MyOrganization/UploadData'
import UploadVolunteer from '../Volunteer/UploadVolunteer';
import ShowData from '../MyOrganization/ShowData'
import ShowVolunteer from '../Volunteer/ShowVolunteer'
import PostUpload from '../PostPage/UploadPost'
import UploadPatient from '../Patients/UploadPatient'
import ShowPatient from '../Patients/ShowPatient'
import ReturnUpload from '../ReturnAmount/ReturnUpload'
import ReturnShow from '../ReturnAmount/ReturnShow'
import Rg from '../Authemtication/Rg'
export default function main() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={SliderShow} />
                    <Route  path="/adminpost" component={adminPost} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={AboutPage} />
                    <Route path="/nnn" component={Rg} />
                    {/* <Route path="/uploadOrgainzation" component={UploadData} /> */}
                    <Route path="/showdata" component={ShowData} />
                    <Route path="/uploadVoluteer" component={UploadVolunteer} />
                    <Route path="/showvolunteer" component={ShowVolunteer} />
                    <Route path="/uploadpatient" component={UploadPatient} />
                    <Route path="/showpatient" component={ShowPatient} />
                    <Route path="/uploadreturn" component={ReturnUpload} />
                    <Route path="/showreturn" component={ReturnShow} />
                    <Route path="/uploadpost" component={PostUpload} />
                </Switch>
            </BrowserRouter>
    )
}
