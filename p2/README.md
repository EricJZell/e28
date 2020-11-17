# Project 2
+ By: **Eric Zell**
+ Production URL: <http://e28p2.ericjzell.com>

## Pages summary
* `BlogsPage` ( `/blogs` or `/` ): Homepage that shows a list of posts.
* `BlogCreatePage` ( `/blogs/new` ): A form for adding a new post.
* `BlogPage` ( `/blogs/:id` ):  Shows an individual blog post.
* `BlogEditPage` ( `blogs/edit/:id` ): A form for editing an existing post.

## SFC summary
* `BlogForm.vue`: A form that is used for both adding a post or editing an existing post.
* `BlogPreview.vue`: A styled div with the blog title and created_at. It is used on both the `BlogsPage` and the `BlogPage`
* `CommentsDisplay.vue`: Displays a form for adding a new comment, as well as a list of existing comments. Used on the `BlogPage`

## Server interaction
* Add a new post
* Edit an existing post
* Add a new comment
* View a list posts
* View a single post
* View all the comments for a single post

## Outside resources
* [Lorem Ipsum Generator](https://www.lipsum.com/)
* [Fixed Footer](https://www.w3schools.com/howto/howto_css_fixed_footer.asp)
* [Dynamic Axios params](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)
