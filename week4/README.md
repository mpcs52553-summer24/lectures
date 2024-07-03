# Week 4

Today we will start with [groceries.html](groceries.html).

Don't forget: tips and cheat sheet still in [index.html](index.html).

1. DOM Manipulation with JS, Part 2

* Intro to HTML Forms
* Grocery List example
* Using `template` elements 

2. Using the http:// protocol instead of file://
  * If you have Python 3.x: `python3 -m http.server`
  * If you have VSCode: Install then "Live Server" extension
  * Write your own (see hello_server.py from previous weeks)

3. Using an external JSON API with `fetch()`

4. Four ways to iterate over JS arrays: 
  * for i = ....
  * for..of
  * .forEach
  * .map
  * .filter

4. JS formatted string interpolation with backtick syntax

5. The Big Idea: Resource, Representation, and State

### Combining JavaScript with HTTP

* Intro to HTTP 
  * HTTP Resources
    * Uniquely identified by URL
    * Can be potentially "CRUD"-ed depending on server functionality
    * Take a look at the [url parsing diagram](url_structure.png)
  * Inspecting network traffic in Chrome
  * Demo: HTTP requests with `curl -v --http1.1 [url]` 
  * HTTP Requests
    * General form: `<METHOD>` `<RESOURCE PATH>` `HTTP/<VERSION>`
    * Example: `GET / HTTP/1.1`
    * `METHOD` is one of: `GET` `POST` `PATCH` `DELETE` `PUT` `HEAD` `OPTIONS`
    * `RESOURCE_PATH` is a path relative to the `Host:` header value 
    * List of "headers" (key-value pairs)
      * `Host`
      * `User-Agent`
      * `Accept:`
    * (Optional) Body
      * HTTP 1.1 only supports text encoding; must use base64 if transmitting binary data
      * HTTP 2.0 is binary-encoded

  * HTTP Responses
    * General form: 
      * `HTTP/<VERSION>` `<STATUS CODE>` `<STATUS DESCRIPTION`>
      * Example: `HTTP/1.1 200 OK`
      * List of "headers" (key-value pairs)
        * `Content-Type` reports the MIME type of the response
        * `Content-Length`
      * (Optional) Body
        * Can consist of one part or multiple parts
        * (Unusual) If multiple parts, MIME types are embedded within each part

  * HTTP response status codes
    * 100-199: Connection information
    * 200-299: Success
    * 300-399: Redirection
    * 400-499: Client Error
    * 500-599: Server Error

* Making HTTP requests with JavaScript
  * Using `fetch()` to access a remote resource
  * Using `async` and `await` for simplifying asynchronous patterns
  * Or using `Promise` objects and `then()`

* If we have time...
  * DOM Event Bubbling
  * JavaScript string template example
  * Working with Arrays: `.map`, `.filter`, `.forEach`, etc.

