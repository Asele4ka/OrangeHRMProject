package com.syntax.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BaseClass {

	public static WebDriver driver;
	public static Properties prop;
	
	//@Before
	public static void setUp() {
		
		initProperties(Constants.configFilePath);
		String browser=prop.getProperty("browser");
		
		if(browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver");
			driver=new ChromeDriver();
		}else if (browser.equalsIgnoreCase("firefox")){
			System.setProperty("webdriver.gecko.driver", "src/test/resources/drivers/geckodriver");
			driver=new FirefoxDriver();
		}else {
			System.out.println("Please provide valid browser");
		}
		driver.manage().window().fullscreen();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
	}
	
	public static void initProperties(String filePath) {
		prop=new Properties();
		try {
			FileInputStream fis=new FileInputStream(filePath);
			prop.load(fis);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//@After
	public static void tearDown() {
		driver.quit();
	}
}
