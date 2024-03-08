# HackMo


## Prompt

You will be creating a full-stack application to allow monetary transfer between users. In order to do this you will be using some pre-existing user data that you will store in a [MySQL](https://dev.mysql.com/doc/refman/8.0/en/) database. Your [ReactJS](https://reactjs.org/) front end will display views created from data in the database. You will serve your application with a [NodeJS](https://nodejs.org/) web server, using [ExpressJS](https://expressjs.com/).


HOW TO START THIS APP
* *[Modify this section to tell graders how to start your app]*

By design, this assessment contains more work than you will be able to complete in a day, so don't be concerned about not completing all of the features below. Rather, please work on the following features **in order**, moving on to the next feature only after the one you are working on is complete. **Please commit WORKING code early and often**, and in particular, commit after completing each feature.

### Getting Balance

![part one][one]

**Implement the following user story:**
 * As a user, when I enter my name and click "Get Balance", I expect to see my current balance.

Implement this user story by doing the following:
* Serve your application from the provided ExpressJS web server.
* Use the existing code in the `client` directory, and build the app and balance components using dummy data in `dummy_data.js`. You may modify `client/src/index.jsx` and `client/src/components/Balance.jsx` if needed.
* Start your application with two commands `npm run react-dev` and `npm run server-dev` in two separate terminal tabs. For more information about webpack, check `webpack.config.js` or take a look at [the Webpack Docs](https://webpack.js.org/).
* Create the database and the users table using the provided `schema.sql`, following the directions provided in the comments to populate your database.
* Complete the getAllUsers function in `database/index.js`.
* In your express server `server/index.js`, complete the route that will respond to GET requests to `/api/users` with an array of all users (including name, id, and balance).
* Replace your dummy data with the data obtained from the server.
* **WHEN COMPLETE** please make a commit with "step one complete".

### Transferring Money

![part two][two]

#### Implement the following user stories:
  * As a user, when I enter my name and click "Get Balance", I expect to see my current balance and a list of other users, excluding myself.
  * As a user, when I click on another user's name, I expect to see an input box and button to transfer money.
  * As a user, when I click on the button to transfer money, I expect my balance to reflect my updated balance after the transfer.
  * As a user, when I view my balance after another user transfers money to me, I expect my balance to be updated.


Implement this user story by doing the following:
  * Create any new components or directives as necessary.
  * Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step two complete".

### Transferring Money to Friends

![part three][three]

#### Implement the following user stories:
  * As a user, when I enter my name and click "Get Balance", I expect to see my current balance and a list of my friends.

Implement this user story by doing the following:
  * Use the data in `friends_data.js` to update your database to reflect friendships. Don't forget to run the `schema.sql` file again after updating the database!
  * Update any components or directives as necessary.
  * Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step three complete".

### Transferring Money to Friends of Friends

![part four][four]

#### Implement the following user stories:
  * As a user, when I enter my name and click "Get Balance", I expect to see my current balance and a list of my friends and friends of friends.

Implement this user story by doing the following:
  * Use the existing data in your database and create any new query methods as necessary.
  * Update any components or directives as necessary.
  * Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step four complete".

### Limit transactions between users

![part five][five]

#### Implement the following developer stories:
  * When a user attempts to transfer more than $500 in one transaction, block the transaction and display a message.
  * When a user attempts to transfer to the same user more than two times within 15 seconds, block the transaction and display a message.

Implement this user story by doing the following:
  * Write rate-limiting middleware for your Express server (do not use any existing npm modules).
  * Create any new components or directives as necessary.

**WHEN COMPLETE** please make a commit with "step five complete".

### Authentication

#### Implement the following developer stories:
  * When a user enters their name and a password for the first time they check their balance, save this password to their account and require it for all subsequent logins.

Implement this user story by doing the following:
  * Write authentication middleware for your Express server.
  * Update any components or directives as necessary.

**WHEN COMPLETE** please make a commit with "step six complete".

### Refactor with an ORM

#### Implement the following developer stories:
  * Refactor the database folder so that it uses Sequelize to interact with the mysql database.

  * If you followed the best practices to build your server side application you won't need to make changes other than inside the database folder, but you need to test your fullstack app again to make sure it is still working correctly.

**WHEN COMPLETE** please make a commit with "step seven complete".

## Available Resources

* [MDN](https://developer.mozilla.org/)
* [W3Schools](https://www.w3schools.com/)
* [ExpressJS Docs](https://expressjs.com/)
* [MySQL Doc](https://dev.mysql.com/doc/refman/8.0/en/)
* [MySQL npm package Docs](https://www.npmjs.com/package/mysql2)
* [ReactJS Docs](https://reactjs.org/)
* [React Router Docs](https://reactrouter.com/en/main)
* [Webpack Docs](https://webpack.js.org/concepts/)
* [Babel Docs](https://babeljs.io/docs/en/)
* [NodeJS Docs](https://nodejs.org/)
* [ExpressJS Docs](https://expressjs.com/)
* [jQuery Docs](https://jquery.com/)
* [Axios](https://axios-http.com/docs/intro)
* [Sequelize Docs](https://sequelize.org/docs/v6/)
* [Express Rate Limit npm package Docs](https://www.npmjs.com/package/express-rate-limit)
* Docs for any npm packages you might use
* [Google Search](https://google.com) to search for the correct page on any of the documentation above

[one]: assets/images/PART1.gif
[two]: assets/images/PART2.gif
[three]: assets/images/PART3.gif
[four]: assets/images/PART4.gif
[five]: assets/images/PART5.gif
