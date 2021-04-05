Feature: Search cucumber js in google

	# to check first cucumber works or not
	Scenario: Verify result for google search
		Given The browser is open
		When open the Google page
		And search for cucumber js
		Then get the website url