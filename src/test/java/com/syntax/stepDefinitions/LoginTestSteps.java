package com.syntax.stepDefinitions;

import org.junit.Assert;

import com.syntax.pages.DashboardPage;
import com.syntax.pages.LoginPage;
import com.syntax.utils.BaseClass;
import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTestSteps extends BaseClass {

	LoginPage login;
	DashboardPage dashboard;

	@Given("^I am on OrangeHRM and page title is \"(.*)\"$")
	public void i_am_on_OrangeHRM_and_page_title_is(String expectedTitle) {
		String title = CommonMethods.verifyTitle();
		Assert.assertEquals(expectedTitle, title);
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String userName, String password) {
		login = new LoginPage();
		CommonMethods.enterValue(login.userName, userName);
		CommonMethods.enterValue(login.password, password);
	}

	@When("^I click login button$")
	public void i_click_login_button() {
		CommonMethods.click(login.btnLogin);
	}

	@Then("^I successfully logged in$")
	public void i_successfully_logged_in() {
		dashboard = new DashboardPage();
		Assert.assertTrue(dashboard.welcome.isDisplayed());
	}

	@Then("^I see an error message \"([^\"]*)\"$")
	public void i_see_an_error_message(String expected) {
		Assert.assertEquals(expected,login.errorMessage.getText());
	}
}
