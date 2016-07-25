'use strict';

import login from 'funshare/src/pages/login';
import signup from 'funshare/src/pages/signup';
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
      hideNavigationBar: false,
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

  
  
}

export default new Routes()
