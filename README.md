# Description

User Story: As a sales representative, I want to be able to search and filter customer information based on their name, email, or location in a user-friendly web interface, so that I can quickly access relevant details and provide personalized service.

# Why

Sales representatives need an efficient way to search for and view customer details, including nested address information, to better prepare for interactions and improve customer service. By implementing a responsive and interactive interface, the team can reduce time spent on manual data retrieval and focus on engaging with customers. A loading indicator will improve user experience by providing visual feedback during data fetch operations.

# Acceptance Criteria

## Scenario #1: Display Customer Data

GIVEN the user accesses the customer information portal
WHEN the page loads
THEN the system should fetch customer data from the mock API
AND display a list of customers with their full names, email addresses, and locations (city and country).

## Scenario #2: Loading Indicator

GIVEN the customer data is being retrieved
WHEN the data fetch is in progress
THEN a loading indicator should be visible
AND should disappear once the data is fully loaded.

## Scenario #3: Search Customer Data

GIVEN a user needs to find specific customer information
WHEN the user types a search term into the search bar
THEN the customer list should update dynamically
AND show only the customers that match the search term in their name, email, or city.

## Scenario #4: Search with Debounce

GIVEN the user is typing in the search bar
WHEN there is a brief pause in typing
THEN the system should delay the search operation
AND trigger the search after a short debounce time to optimize performance.

## Scenario #5: No Search Results Found

GIVEN the user enters a search term that does not match any customers
WHEN the search completes
THEN the system should display a message indicating no customers were found
AND prompt the user to refine their search.

## Scenario #6: Data Transformation for Display

GIVEN the user list is displayed
WHEN the customer data includes separate first and last names
THEN the system should display a Full Name property combining these fields
AND a Location property showing City, Country from the address object.

## Scenario #7: Sorting Customer Data (Optional)

GIVEN the user wants to organize the customer list
WHEN the user clicks on a sort button
THEN the system should sort the customer list alphabetically by Full Name or Location
AND allow sorting in both ascending and descending order.

## Scenario #8: Error Handling (Optional)

GIVEN the system fails to retrieve data from the mock API
WHEN there is an error during data fetch
THEN the system should display an error message
AND provide an option to retry the data retrieval.



