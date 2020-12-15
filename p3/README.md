# Project 3
+ By: **Eric Zell**
+ Production URL: <http://e28p3.ericjzell.com>

## Outside resources
* [Cypress Docs](https://docs.cypress.io/api/commands/click.html#Syntax)
* [Lorem Ipsum Generator](https://www.lipsum.com/)
* [Fixed Footer](https://www.w3schools.com/howto/howto_css_fixed_footer.asp)
* [Dynamic Axios params](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)

## Notes for instructor
* There are two types of users: admins and non-admins. There are two users in the
database seed: `jill@harvard.edu` and `jamal@harvard.edu`. Both passwords are `asdfasdf`.
`jill@harvard.edu` is an admin and `jamal@harvard.edu` is a non-admin. Admin users
can create, update, and delete blogs. Non-admin users can comment on blogs.
Newly registered users are non-admins.
* All features have end-to-end tests, except for storing of in-progress comments using
localStorage, which I have been unable to make work with Cypress.
