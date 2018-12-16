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
  "duration": 3306302258,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
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
  "duration": 339906652,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1155881332,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 35345849,
  "status": "passed"
});
formatter.after({
  "duration": 195400689,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Invalid Login",
  "description": "Invalid login with valid username and invalid password",
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
  "name": "I see an error message \"Invalid credentials\"",
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
        "admin",
        "Messy123"
      ],
      "line": 24,
      "id": "loginfeature;invalid-login;;2"
    },
    {
      "cells": [
        "admin",
        "Jessy123"
      ],
      "line": 25,
      "id": "loginfeature;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2029730206,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid Login",
  "description": "Invalid login with valid username and invalid password",
  "id": "loginfeature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I enter \"admin\" and \"Messy123\"",
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
  "name": "I see an error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
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
  "duration": 235819185,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 622651923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 24
    }
  ],
  "location": "LoginTestSteps.i_see_an_error_message(String)"
});
formatter.result({
  "duration": 30350439,
  "status": "passed"
});
formatter.after({
  "duration": 158069586,
  "status": "passed"
});
formatter.before({
  "duration": 1973596629,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid Login",
  "description": "Invalid login with valid username and invalid password",
  "id": "loginfeature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I enter \"admin\" and \"Jessy123\"",
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
  "name": "I see an error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
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
  "duration": 220591886,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 578057008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 24
    }
  ],
  "location": "LoginTestSteps.i_see_an_error_message(String)"
});
formatter.result({
  "duration": 33532356,
  "status": "passed"
});
formatter.after({
  "duration": 161858972,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Invalid Login",
  "description": "Invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I see an error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "loginfeature;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35,
      "id": "loginfeature;invalid-login;;1"
    },
    {
      "cells": [
        "messy",
        "Messy123"
      ],
      "line": 36,
      "id": "loginfeature;invalid-login;;2"
    },
    {
      "cells": [
        "ronaldo",
        "Jessy123"
      ],
      "line": 37,
      "id": "loginfeature;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1895363754,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 36,
  "name": "Invalid Login",
  "description": "Invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I enter \"messy\" and \"Messy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I see an error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "messy",
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
  "duration": 217513781,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 249680513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 24
    }
  ],
  "location": "LoginTestSteps.i_see_an_error_message(String)"
});
formatter.result({
  "duration": 31492159,
  "status": "passed"
});
formatter.after({
  "duration": 185181035,
  "status": "passed"
});
formatter.before({
  "duration": 2030689927,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 37,
  "name": "Invalid Login",
  "description": "Invalid login with invalid username and invalid password",
  "id": "loginfeature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I enter \"ronaldo\" and \"Jessy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I see an error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ronaldo",
      "offset": 9
    },
    {
      "val": "Jessy123",
      "offset": 23
    }
  ],
  "location": "LoginTestSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 221305263,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 258006934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 24
    }
  ],
  "location": "LoginTestSteps.i_see_an_error_message(String)"
});
formatter.result({
  "duration": 32554591,
  "status": "passed"
});
formatter.after({
  "duration": 138000306,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Invalid Login",
  "description": "Invalid login with empty username and empty password",
  "id": "loginfeature;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I see an error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "loginfeature;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 47,
      "id": "loginfeature;invalid-login;;1"
    },
    {
      "cells": [
        "",
        "Messy123",
        "Username cannot be empty"
      ],
      "line": 48,
      "id": "loginfeature;invalid-login;;2"
    },
    {
      "cells": [
        "ronaldo",
        "",
        "Password cannot b empty"
      ],
      "line": 49,
      "id": "loginfeature;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1939129802,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 48,
  "name": "Invalid Login",
  "description": "Invalid login with empty username and empty password",
  "id": "loginfeature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I enter \"\" and \"Messy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I see an error message \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "Messy123",
      "offset": 16
    }
  ],
  "location": "LoginTestSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 200059293,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 92476963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 24
    }
  ],
  "location": "LoginTestSteps.i_see_an_error_message(String)"
});
formatter.result({
  "duration": 28017901,
  "status": "passed"
});
formatter.after({
  "duration": 136131273,
  "status": "passed"
});
formatter.before({
  "duration": 1941233062,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "Given: I am on OrangeHRM and page title is \"OrangeHRM\"",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 49,
  "name": "Invalid Login",
  "description": "Invalid login with empty username and empty password",
  "id": "loginfeature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I enter \"ronaldo\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I see an error message \"Password cannot b empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ronaldo",
      "offset": 9
    },
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "LoginTestSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 197555158,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 92922660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot b empty",
      "offset": 24
    }
  ],
  "location": "LoginTestSteps.i_see_an_error_message(String)"
});
formatter.result({
  "duration": 42653619,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cPassword cannot b[] empty\u003e but was:\u003cPassword cannot b[e] empty\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.syntax.stepDefinitions.LoginTestSteps.i_see_an_error_message(LoginTestSteps.java:45)\n\tat ✽.Then I see an error message \"Password cannot b empty\"(Login.feature:44)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 826533645,
  "status": "passed"
});
});