package com.syntax.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class TimePage extends BaseClass  {

	//WebDriver driver;
	@FindBy(id = "employee")
	private WebElement empName;

	@FindBy(id = "btnView")
	private WebElement btnView;

	@FindBy(xpath = "//div[@class='message warning']")
	private WebElement errorMsg;

	public TimePage(WebDriver driver) {
		//this.driver = driver;
		PageFactory.initElements(driver, this);
	}
}
