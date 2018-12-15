package com.syntax.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class AddEmployee extends BaseClass {

	// WebDriver driver;

	@FindBy(id = "firstName")
	public WebElement firstName;

	@FindBy(id = "lastName")
	public WebElement lastName;

	@FindBy(id = "btnSave")
	public WebElement btnSave;

	@FindBy(id = "chkLogin")
	public WebElement chxLoginDetails;

	@FindBy(id = "user_name")
	public WebElement userName;

	@FindBy(id = "user_password")
	public WebElement password;

	@FindBy(id = "re_password")
	public WebElement confPwd;

	public AddEmployee(WebDriver driver) {
		// this.driver = driver;
		PageFactory.initElements(driver, this);
	}
}
