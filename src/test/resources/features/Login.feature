#Author:asel@syntaxtechs.com
Feature: LoginFeature

  Background: 
    Given: I am on OrangeHRM and page title is "OrangeHRM"


  Scenario: Valid Login
    Validating valid login

    When I enter "admin" and "admin123"
    And I click login button
    Then I successfully logged in

  Scenario Outline: Invalid Login
    Invalid login with valid username and invalid password

    When I enter "<username>" and "<password>"
    And I click login button
    Then I see an error message "Invalid credentials"

    Examples: 
      | username | password |
      | admin    | Messy123 |
      | admin    | Jessy123 |

  Scenario Outline: Invalid Login
    Invalid login with invalid username and invalid password

    When I enter "<username>" and "<password>"
    And I click login button
    Then I see an error message "Invalid credentials"

    Examples: 
      | username | password |
      | messy    | Messy123 |
      | ronaldo  | Jessy123 |

  Scenario Outline: Invalid Login
    Invalid login with empty username and empty password

    When I enter "<username>" and "<password>"
    And I click login button
    Then I see an error message "<message>"

    Examples: 
      | username | password | message                  |
      |          | Messy123 | Username cannot be empty |
      | ronaldo  |          | Password cannot b empty  |
