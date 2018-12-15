package com.syntax.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class AssignLeave  extends BaseClass {

	//WebDriver driver;

	@FindBy(id = "assignleave_txtEmployee_empName")
	public WebElement empName;

	@FindBy(id = "assignleave_txtLeaveType")
	public WebElement ddLeaveType;

	@FindBy(id = "assignleave_txtFromDate")
	public WebElement fromDate;

	@FindBy(id = "assignleave_txtToDate")
	public WebElement toDate;

	@FindBy(id = "assignleave_txtComment")
	public WebElement comment;

	@FindBy(id = "assignBtn")
	public WebElement btnAssign;

	public AssignLeave(WebDriver driver) {
		//this.driver = driver;
		PageFactory.initElements(driver, this);
	}
}
