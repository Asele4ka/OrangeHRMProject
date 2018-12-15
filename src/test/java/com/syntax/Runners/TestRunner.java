package com.syntax.Runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features" }, glue = { "com/syntax/stepDefinitions" }, plugin = {
		"pretty", "html: target/CucumberHTML" }, monochrome = true, dryRun = false)

public class TestRunner {

}