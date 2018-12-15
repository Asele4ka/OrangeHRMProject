package com.syntax.Runners;

import com.syntax.utils.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void start() {
		BaseClass.setUp();
	}
	
	@After
	public void stop() {
		BaseClass.tearDown();
	}
}
