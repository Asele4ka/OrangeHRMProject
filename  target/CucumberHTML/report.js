$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:asel@syntaxtechs.com"
    }
  ],
  "line": 2,
  "name": "LoginFeature",
  "description": "",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2814337094,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on OrangeHRM",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Valid Login",
  "description": "Validating valid login",
  "id": "loginfeature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I enter \"admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 338428000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 974096319,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 30799948,
  "status": "passed"
});
formatter.after({
  "duration": 196590337,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Invalid Login",
  "description": "Validating invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am still on Login Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "loginfeature;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "loginfeature;invalid-login;;1"
    },
    {
      "cells": [
        "Messy",
        "Messy123"
      ],
      "line": 24,
      "id": "loginfeature;invalid-login;;2"
    },
    {
      "cells": [
        "Jessy",
        "Jessy123"
      ],
      "line": 25,
      "id": "loginfeature;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2019345090,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on OrangeHRM",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid Login",
  "description": "Validating invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I enter \"Messy\" and \"Messy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am still on Login Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Messy",
      "offset": 9
    },
    {
      "val": "Messy123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 330874758,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 308966660,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_am_still_on_Login_Page()"
});
formatter.result({
  "duration": 24500233,
  "status": "passed"
});
formatter.after({
  "duration": 204622143,
  "status": "passed"
});
formatter.before({
  "duration": 1860520985,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on OrangeHRM",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid Login",
  "description": "Validating invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I enter \"Jessy\" and \"Jessy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am still on Login Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Jessy",
      "offset": 9
    },
    {
      "val": "Jessy123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 238138473,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 273175629,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_am_still_on_Login_Page()"
});
formatter.result({
  "duration": 21978901,
  "status": "passed"
});
formatter.after({
  "duration": 198121289,
  "status": "passed"
});
});