package com.syntax.utils;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.SystemUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonMethods extends BaseClass {

	public static String verifyTitle() {
		return driver.getTitle();
	}
	
	public static WebElement wait(WebElement element) {
		WebDriverWait wait=new WebDriverWait(driver, 30);
		return wait.until(ExpectedConditions.elementToBeClickable(element));
	}
	
	public static void clickLink(String linkText) {
		driver.findElement(By.linkText(linkText)).click();
	}

	public static void enterValue(WebElement element, String value) {
		element.clear();
		element.sendKeys(value);
	}

	public static void click(WebElement element) {
		WebElement el=wait(element);
		el.click();
	}

	public static void selectValue(WebElement element, String value) {
		Select obj = new Select(element);
		obj.selectByVisibleText(value);
	}
}
