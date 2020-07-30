import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Sign from './components/Auth/Sign';
import Register from './components/Auth/Register'
import Home from './Home'
import adminPost from './components/homeComponent/adminPost'
import AboutPage from './components/AboutPage/AboutPage'
import UploadData from './components/MyOrganization/UploadData'
import ShowData from './components/MyOrganization/ShowData'
import UploadVolunteer from './components/Volunteer/UploadVolunteer'
import ShowVolunteer from './components/Volunteer/ShowVolunteer'
import UploadPatient from './components/Patients/UploadPatient'
import ShowPatient from './components/Patients/ShowPatient'
import ReturnUpload from './components/ReturnAmount/ReturnUpload'
import ReturnShow from './components/ReturnAmount/ReturnShow'
import PostUpload from './components/PostPage/UploadPost'
class App extends Component {
 
  render() {

    return (
    
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Sign} exact/>
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route  path="/adminpost" component={adminPost} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={AboutPage} />
          <Route path="/uploadOrgainzation" component={UploadData} />
          <Route path="/showdata" component={ShowData} />
          <Route path="/uploadVoluteer" component={UploadVolunteer} />
          <Route path="/showvolunteer" component={ShowVolunteer} />
          <Route path="/uploadpatient" component={UploadPatient} />
          <Route path="/showpatient" component={ShowPatient} />
          {/* <Route path="/patientreturn/:id" component={ReturnUpload} /> */}
          {/* <Route path="/uploadreturn" component={ReturnUpload} /> */}
          <Route path="/uploadreturn/:id" component={ReturnUpload} />
          <Route path="/returnshow/:id" component={ReturnShow} />
          <Route path="/uploadpost" component={PostUpload} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
