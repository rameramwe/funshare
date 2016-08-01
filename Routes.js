'use strict';

import Home from 'funshare/src/pages/Home';
import login from 'funshare/src/pages/login';
import signup from 'funshare/src/pages/signup';
import account from 'funshare/src/pages/account';
import button from 'funshare/src/components/button';


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
      rightButton: button,
      hideNavigationBar: true,
      statusBarStyle: "light-content"
    }
  }

  signup() {
    return {
      name: "signup",
      title: "signup",
      component: signup,
      hideNavigationBar: true,
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
  
  
}

export default new Routes()
