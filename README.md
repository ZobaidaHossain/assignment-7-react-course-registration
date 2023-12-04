### live link:https://65054583ca3291668df4222b--hilarious-gingersnap-94bac4.netlify.app/
### 1.Add at least 3 Project features
Question -1
Add at least 3 Project features
->Course selection: Here user can select course .when a course is selected, it’s added to the selectCourse state .Also ,the total cost and remaining credit hours are updated .
->Add condition for adding course and credit hour and course remaining hour: Here set a condition where user cannot add one course more than one time. This project calculate and display the remaining credit hours ,credit hour based on the selected course using the remaining state and totalCost state.
-> Use Toast: In this project uses react toast library to display the toast .when user do not fill the condition, it display the toast message .

### 2.Discuss how you managed the state in your assignment project.
Question-2
Discuss how you managed the state in your assignment project.
1.Prepare project
->Firstly create a react project and setup tailwind to the react or vite project.
->then I create fake API by using ChatGPT and set the proper google fonts.
2.React Steps
->Create component and done the export import from one file to another file and call them .
3.Fetch data and display dynamically:
->Then, Load data from API. After that for storing data declare state. For declaring state we use ‘useState’. And fake API’s data store as array of object. for this I assign an empty array for default value.
->For loading data, I am using ‘useEffect’.In the ‘useEffect’ hook ,we have to take two parameter, first one is call back function and another one is dependency. We load the data for one time, so that we use empty array as dependency. Then fetch the data from API. Then done response and convert file to the json. Then set the data to the state.
->Then set the fetch data dynamically using map function and doing necessary CSS for display dynamic fetch like provided figma file.

4.Click the select button and show the course name in cart portion
->Firstly create a function and call the arrow function in the select button portion by using onclick DOM event. And passing a parameter which have all information of the cart.
->Then I store cart information to another state  and using spread operator(…/) to the function ,we brought all elements from the array and add the element and set this to the new state.
->then import the cart component and pass the props for passing all elements to the cart component.
->In the cart component, use array destructuring in cart component for working with state and props. Then, for showing course name dynamically I used a loop which is map. 
5.Adding Course Name only one time.
->firstly check weather course is available in the state which is declare for cart.for this I used find() method which is used for find the first element of an array that satisfies a given condition. and the given condition is if we want to add a course more than one time it shows toast that it already added. 
6.Adding the feature where we calculate credit hour and remaining hour
->for credit hour and remaining hour, I declare initial value .here which I click ,it’s credit hour is the initial value and use forEach loop to added all hour and sum of these hour.
->Then I store credit and remaining information to another state and set this to the new state individually.
->then import the cart component and pass the props for passing all elements to the cart component.
->In the cart component, use array destructuring in cart component for working with state and props. Then, for showing credit hour and remaining hour dynamically I used a loop which is map. 

7.Added condition to the credit hour and remaining hour
### Now  I am discussing how I  managed the state in my assignment project.
1:I used useState hook to create state variables which are blogs,selectCourse,total Cost.remaining.here blogs is an array of all blog posts, selectCourse is an array of the courses that the user has selected and totalCost is the total cost of the selected courses and remaining is the credit hours available to the user.
2: I used useEffect hook to fetch the data from json file and set them to the blogs state.
3: Then I created handleSelectCourse function that takes a blog post as input and set the condition where if the couse is already in the SelectCourse state ,then it return a toast message. Otherwise the function added the course to the select Course state variable and update the totalCost and remaining state variables.
4.Here I created Cart component that display list of courses that the user select and remaining credit hours available to the user and total cost of the selected course.
5:Here I pass the selectCourse,remaining and totalCost state variables to the Cart componeny as props. In the cart component, use array destructuring in cart component for working with state and props. Then, for showing credit hour and remaining hour dynamically I used a loop which is map.
