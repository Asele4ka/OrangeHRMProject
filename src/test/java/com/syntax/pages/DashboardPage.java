package com.syntax.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class DashboardPage extends BaseClass  {

	//WebDriver driver;
	
	@FindBy(id = "welcome")
	public WebElement welcome;

	@FindBy(xpath = "//img[contains(@src, 'MyTimesheet')]")
	public WebElement timesheet;

	@FindBy(xpath = "//span[text()='Assign Leave']")
	public WebElement assignLeave;

	public DashboardPage(WebDriver driver) {
		//this.driver=driver;
		PageFactory.initElements(driver, this);
	}
}
