# Instructions

With the included code, follow the instructions below to complete all tasks. How the tasks are completed are not as important as that they work as expected. If you have difficulties in a particular area, do your best, but don’t spend a great deal of time working them out. Included is the Coding Exercise Home Final.png file that displays what the exercise should look like.

1. One of the major requirements for developing at U.S. Bank is to maintain accessibility. Add the U.S. Bank logo that is in the images directory in an accessible way. Use landmarks where appropriate.
  - Added `<header>`, `<main>`, and `<footer>` HTML5 Region elements instead of landmarks ex: (`role="main"`)
  - Added `role="img"` `aria-label=""` to SVG element directly for ARIA screen readers
  - Import to add logo SVG
  - Set USBlogo as image component
  - Import to add main.css 

2. Add and debug Customer component. Fix issues so that the component renders properly.

3. Import Banker component and pass existing data from data/employees.json via props. 

4. Filter the content to only display bankers. Use props.children to set heading.

5. Sort the the employees by satisfactionRating.

4. Set styles for the application using CSS or Sass to match design given.

5. Add comments to your code on what each component is, and how it works. Make sure to add comments both in Javascript and in JSX.


# Initial setup
This is built using create-react-app, and in order to run you will first have to install the node modules by runnning

npm i

# Run application
To run the application in development mode run

npm start
