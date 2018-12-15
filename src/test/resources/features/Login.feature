#Author:asel@syntaxtechs.com
Feature: LoginFeature

  Background: I am on OrangeHRM
    Given: I am on OrangeHRM and page title is "OrangeHRM"


  Scenario: Valid Login
    Validating valid login

    When I enter "admin" and "admin123"
    And I click login button
    Then I successfully logged in

  Scenario Outline: Invalid Login
    Validating invalid login with invalid username and invalid password

    When I enter "<username>" and "<password>"
    And I click login button
    Then I am still on Login Page

    Examples: 
      | username | password |
      | Messy    | Messy123 |
      | Jessy    | Jessy123 |
