## Table of contents

- Overview
- The challenge
- Screenshot
- Links
- My process
- Built with
- What I learned
- Continued development
- Useful resources
- Author


## Overview

This is a challenge to build a notification page and distinuish between the read and unread notifications. Once the user clicks the "Mark all as read" button it should change the unread messages count to zero and update the unread to read layout.

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- I used the class component for the App.js component as I want to change the state of the component when the "Mark all as read" button is clicked. Whereas the remaining components are functional components as they the pure functions.

#### people.js

- I created a seperate component called "people.js" to include the list of users as an array of objects. By creating them as an array of objects I will be able to add or remove the users, change the values of the property for a specific user and also use all the array methods for looping through them.

#### App.js 
- The App.js component is the parent component of Head.js and Users.js components.
- I declared markAllRead() function that can be passed on to the Head.js component as prop for using it in the onClick event handler.
- markAllRead() function loops through the people array and changes the current state of the component and sets the current state of the people to the updatedPeople.

#### Head.js 

- The head.js component includes the header of the notification page. This takes the props(markRead, peopleData) from the App.js. We assign the "onClick" event handler to the "Mark all as read" button so when this is clicked the "markRead" function is envoked.
- The head.js component also includes the userCount to loop through the peopleData that we received as prop from the App.js and checks if how many users have notifications unread and gives the value. If it is gretaer than zero it populates the number of unread messages in the usercount whereas if it is equals to zero then the div doesn't gets displayed.

#### Users.js 

- the properties of the users object in the people array are passed as props from App.js to the people.js component.
- The User.js component returns a responsive HTML page based on whether the user is read or unread.
- The chess player image is only required for the commented notification. So I have used the logical AND operator to do a short-circuit evaluation of the image and only insert the <img> if image=== true.

### Built with

- JSX
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

- I have learned how to use the  logical AND as a short-circuit operator in real-time. 
- I have used relative image path in my previous projects however, importing the images from the images folder and then using them as the value of the property in the objects is the first time that I have come across.
- In the css shown below, I have learned how to remove an element completely conditionally. 
```css
.none{
  display: none;
}
```
- I was able to use the spread operator to select all the users in an array and set their property "read" to true. 

### Continued development

- I have to focus more different ways we can import the images from the images folder to the components.
- Continue to learn on more CSS styling. Through which we can display different styles on the elements based on different conditions. 


### Useful resources

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) - This helped me in using the short-circuit operator. I really liked this pattern and will use it going forward.
- [Flexbox Cheatsheet](https://darekkay.com/flexbox-cheatsheet/) - This is an amazing article which helped me in using the flexbox in my css styling.
- [CSS Tricks](https://css-tricks.com/almanac/) - This helped me on how to use some of the CSS properties.

## Author

- Website - [Santosh Sai Sharan Chepuri](https://www.your-site.com)
- LinkedIn - [@Santosh Sai Sharan Chepuri](https://www.linkedin.com/in/santosh-sai-sharan-chepuri-19271186/)
