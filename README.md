
# Verticode Take Home Challenge

Welcome to the Verticode take home coding challenge. The challenge shouldn't take long (10-30 minutes once you've read this document and gotten the development environment set up), however there is no time limit - feel free to take as long as you want. You can tackle the tasks in whatever way you think is best. In general try to make sure the code is readable, maintainable, and efficient. 

We understand that javascript and react.js might not be your most comfortable language/framework. If this is the case feel free to use comments/pseudo code to explain how you would go about the tasks, even if you're not sure the exact syntax required.

This task is totally open book, feel free to use any tools/resources to help. 

## Context

The challenge is to complete 3 tasks in the codebase provided. The codebase is a react.js web application with a single 'People' page in it. 

The page displays a list of people, what job they do, and how good at their job they are. Each person has a name, a job, a rating (out of 10), and their years of experience.

The tasks are explained in more detail below, but at a top level we would like you to:
1. Add a method to format a persons name
2. Add a button to the page that toggles filtering the data by a rating of >5
3. Add a method that weights a persons rating by the number of years they have been working in their job

### Running the development environment

You will need to have node.js and npm installed on your system in order to run the development environment. Where possible use the LTS version of npm and node.js, however any currently supported version should be suitable for this task.

To install required packages run 'npm i'

Use the command 'npm run start' to run the development environment

### Data

The application uses a dummy API data source. You can see the raw data and dummy API method in the api.service.js file.

### Git

If you usually use Git when developing you can create a local repository and include the .git folder when returning the project files.

There is no requirement to use Git for this task, however if you're comfortable with Git it would be great to see it used.

## Tasks

Here are the tasks we would like you to complete.

### 1 - Add User Name Formatter

Add a method to format a persons name. Currently the name displayed in the table is just the persons first name. Update this to include a method to format the entire persons name, including their title, first name, middle names, and last name.

### 2 - Rating Filter Toggle button

Add a button to the page (wherever you like) that toggles a filter on the data. The filter should be used to only display people with a rating greater than 5. 

### 3 - Weighted Rating method

Add a new field to the table to display a weighted rating. This weighted rating should take the number of years the person has been doing their job into account. You can use whatever method of weighting you would like. A simple suggestion for how the weighting could work is given below, however this isn't required. The actual logic used isn't important, we'll be looking at the way it's implemented.

Example weighting logic:
If the person has less than 3 years experience, multiply rating by 0.8
If the person has 3 or more years experience and less than 5 years experience, multiply rating by 1.2
if the person has 5 or more years experience, multiply rating by 1.4


## Returning Task

Once the task is completed please zip up all the project files and return to us via email or a file sharing site such as dropbox or google drive.

## Tips

Take a look at the raw data in the api.service.js file before you start

All the changes you need to make are in the src/people.js file.

There are some sample components in the components folder. Although these shouldn't need changing to complete the tasks it may be useful to look at these.

Don't worry if there's something you can't get working easily, this task is more about your approach to development than the final product. Use comments to explain your thinking/process around anything that isn't functioning as you expect.