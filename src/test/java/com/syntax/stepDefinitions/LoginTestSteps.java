package com.syntax.stepDefinitions;

import org.junit.Assert;

import com.syntax.pages.DashboardPage;
import com.syntax.pages.LoginPage;
import com.syntax.utils.BaseClass;
import com.syntax.utils.CommonMethods;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTestSteps extends BaseClass{

	LoginPage login;
	DashboardPage dashboard;

//	@Before
//	public void start() {
//		BaseClass.setUp();
//	}
//	
//	@After
//	public void stop() {
//		BaseClass.tearDown();
//	}
	
	@Given("^I am on OrangeHRM and page title is \"(.*)\"$")
	public void i_am_on_OrangeHRM_and_page_title_is(String expectedTitle) {
		String title = CommonMethods.verifyTitle();
		Assert.assertEquals(expectedTitle, title);
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String userName, String password) {
		login = new LoginPage(driver);
		CommonMethods.enterValue(login.userName, userName);
		CommonMethods.enterValue(login.password, password);
	}

	@When("^I click login button$")
	public void i_click_login_button() {
		CommonMethods.click(login.btnLogin);
	}

	@Then("^I successfully logged in$")
	public void i_successfully_logged_in() {
		dashboard = new DashboardPage(driver);
		boolean msgWelcome = dashboard.welcome.isDisplayed();
		Assert.assertTrue(msgWelcome);
	}

	@Then("^I am still on Login Page$")
	public void i_am_still_on_Login_Page() {
		boolean btnLogin = login.btnLogin.isDisplayed();
		Assert.assertTrue(btnLogin);
	}
}
