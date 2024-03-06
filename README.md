# DynoDashboard
DynoDashboard is a dynamic and responsive dashboard that uses React. It provides real-time insights into media campaign performance by providing data in 3 forms. A bar graph that visualizes the total clicks on each page, a pie chart to represent the breakdown of page views, and a table to show additional data.

The Dashboard uses data mocked out in react that updates every 10 seconds to show smooth data transitions. It also has a login that shows an error if incorrect information is submitted.

## Setup
npm ci
npm run start

## Decisions
I decided to provide mock data through react using Faker library that generates fake data for the purposes of this project, and I used setTimeout every 10 seconds to show the smooth data transitions. I understand, however, that in real circumstances we would populate it with real data using an API.

I created a login that works with the email "test@email.com" and password "password123". This login does not guard the dashboard for the sake of this project, but normally would do so for real-world applications.

I used the ApexCharts library for the charts because it is simple to use and has smooth transitions when data is updated.

I used styled-components because it localizes the CSS to the files that I'm working in, which is easier to understand and troubleshoot. I used emotion because it is a helpful tool that provides suggestions when working with styled-components.

## Pages
You can navigate to the login page by going to /login in the URL. The Login page can be completed by entering the email "test@email.com" and password "password123". It will then navigate you to the dashboard. The Login also has error handling if you type in invalid credentials and alerts you.

The Dashboard should load automatically when you run the program. I used the Faker library to provide data for the charts with a limit of 9999 to help provide more realistic data, and reload with new data every 10 seconds to show smooth transitioning. The dashboard is mobile-friendly. The table also shows additional data that may be relevant.
## Components
The app-bar is a simple header with the name of the Dashboard at the top with some styling.

The bar-graph is a chart from apexCharts made so that it can be reusable for different purposes.

The input is a styled input made to be reusable for any time an input field is needed.

The layout is for the browser router so that it can cleanly navigate between pages and be reused for other purposes.

The pie-graph is a chart from apexCharts that is made to be reusable.

The table is react table that is made to be reusable.


