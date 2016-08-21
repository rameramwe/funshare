'use strict';

import Home from 'funshare/src/pages/Home';
import Home1 from 'funshare/src/pages/Home1';
import login from 'funshare/src/pages/login';
import signup from 'funshare/src/pages/signup';
import account from 'funshare/src/pages/account';
import button from 'funshare/src/components/button';
import Onboarding from 'funshare/Screens/Onboarding';
import LogoutButton from 'funshare/Views/LogoutButton';
import OnboardingButton from 'funshare/Views/OnboardingButton';
import PostButton from 'funshare/Views/PostButton';
import Ico from 'funshare/src/components/Ico';
import ProfileIcon from 'funshare/src/components/ProfileIcon';
import fuck from 'funshare/src/pages/fuck';
import addstuff from 'funshare/src/pages/addstuff';
import mystuff from 'funshare/src/pages/mystuff';
import plus from 'funshare/src/components/plus';
import fertig from 'funshare/src/components/fertig';



class Routes {
  get(route, args) {
    if ("undefined" == typeof this[route]) {
      console.warn("No route found with name: " + route);
      return false;
    } else {
      return this[route].call(this, args);
    }
  }


  login() {
    return {
      name: "login",
      title: "login",
      component: login,
      leftButton: button,
      rightButton: button,
      hideNavigationBar: true,
      statusBarStyle: "light-content"
    }
  }
  Home() {
    return {
      name: "Home",
      title: "Home",
      component: Home,
      leftButton: button,
      rightButton:  PostButton,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }

  signup() {
    return {
      name: "signup",
      title: "signup",
      component: signup,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }

 account() {
    return {
      name: "account",
      title: "account",
      component: account,
      leftButton: button,
      rightButton: button,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }
  onboarding(user) {
    return {
      name: "onboarding",
      title: "Welcome",
      component: Onboarding,
      leftButton: button,
      rightButton: OnboardingButton,
      passProps: { user: user },
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }

Home1(user) {
    return {
      name: "Home1",
      title: ProfileIcon,
      component: Home1,
      rightButton: Ico,
      leftButton: ProfileIcon,
      passProps: { user: user },
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }
  fuck(desc,piclink,title ) {
    return {
      name: "signup",
      title: "signup",
      component: fuck,
      hideNavigationBar: true,
      passProps: { desc:desc , piclink :piclink,title:title },
      statusBarStyle: "light-content"
    }
  }
mystuff() {
    return {
      name: "mystuff",
      title: mystuff,
      component: mystuff,
      rightButton: plus,
      leftButton: fertig,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  } 
  addstuff() {
    return {
      name: "addstuff",
      component: addstuff,
      hideNavigationBar: true,
    }
  }
  
  
}

export default new Routes()
