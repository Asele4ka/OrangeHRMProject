package com.syntax.stepDefinitions;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.syntax.utils.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void start(Scenario scenario) {
		BaseClass.setUp();
		System.out.println("Starting scenario "+scenario.getName());
	}
	
	@After
	public void stop(Scenario scenario) {
		if (scenario.isFailed()) {
			TakesScreenshot tsc=(TakesScreenshot)BaseClass.driver;
			byte[] picture = tsc.getScreenshotAs(OutputType.BYTES);
			scenario.embed(picture, "image/png");
		}
		BaseClass.tearDown();
	}
}
