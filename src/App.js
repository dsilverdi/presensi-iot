import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Dashboard from "./page/Dashboard";
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./PrivateRoute";
import Presensi from "./page/Presensi";
import DaftarKaryawan from "./page/DaftarKaryawan";

const App = () => {
  return (
    <Router>
      <AuthProvider>
          {/* <PrivateRoute exact path="/template/copy/sms-ads" component={SmsAd}/>
          <PrivateRoute exact path="/template/content" component={ContentWriting}/> 
          <PrivateRoute exact path="/template/copy/instagram-ads" component={InstagramAd}/>
          <PrivateRoute exact path="/template/copy/facebook-ads" component={FacebookAd}/>
          <PrivateRoute exact path="/template/copy/google-ads" component={GoogleAd}/>
          <PrivateRoute exact path="/template" component={TemplateList}/>
          <PrivateRoute exact path="/" component={Dashboard} /> */}
          <PrivateRoute exact path="/daftar-karyawan" component={DaftarKaryawan} />
          <PrivateRoute exact path="/presensi" component={Presensi} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
    </AuthProvider>
    </Router>
    
  );
};

export default App;
