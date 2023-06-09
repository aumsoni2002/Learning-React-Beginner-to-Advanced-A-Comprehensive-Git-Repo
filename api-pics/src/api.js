import axios from "axios";

/* 
The below function will make a HTTP 'GET' Request to the 'unsplash' server through shown API URL. 
And then server will send a response which will get saved into the 'response' variable and returns it where ever we call 'searchImages'.
The word 'async' and 'await' is used to let javascript know that wait for the 'response' variable to get a value.
and only then return it.
Now as we know a HTTP Request has three things
*/
const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    // Request line
    headers: {
      Authorization: "Client-ID Cq1ikQoFflBjNNAuTHzyV_QtciM4-u0TLslkJoGyHPc", // Request header which has an access key
    },
    params: {
      query: searchTerm, // this is what the user will search for such as: I want photos of cars, toys, mountains....
    },
  });
  //   console.log(response.data.results)
  // this 'response.data.results' which is an array of images will get return where ever the 'searchImages' is called
  return response.data.results;
};

export default searchImages;

/*
-- Axios JavaScript Library
   Axios is a popular JavaScript library that is available as an npm package for use in Node.js applications or 
   in modern web browsers. It provides a simple and consistent interface for making HTTP requests to web servers.
   Axios supports various methods for making HTTP requests, such as GET, POST, PUT, and DELETE, and it allows for 
   the inclusion of headers, URL parameters, and request payloads. Axios also supports the Promise API, making it easy 
   to write asynchronous code and handle responses.

   Axios has many useful features, including:
   Interceptors: Axios provides interceptors that can be used to modify or handle requests and responses globally.
   Automatic content type detection: Axios can automatically detect the content type of a request and set the appropriate headers.
   Canceling requests: Axios allows for canceling pending requests using cancel tokens.
   Error handling: Axios provides a consistent way of handling errors and exceptions that may occur during requests.
   
   Overall, Axios is a powerful and widely used tool for making HTTP requests in JavaScript applications, and it is especially 
   useful for handling API requests and responses. 
*/

/*
-- Overview of HTTP Requests
   In simple words: An application makes a request over to some server and the application gets back a response from that server.
   
-- HTTP Request
   An HTTP request consists of three things: Request Line, Request headers and Request body.
   Request line: This includes the HTTP method (such as GET, POST, PUT, DELETE), the URI (Uniform Resource Identifier) 
                 or URL (Uniform Resource Locator) of the resource being requested, and the HTTP protocol version.
                 HTTP Methods and what they do:
                 GET   -- Get some information from the server
                 POST  -- Tell the server to create some new record
                 PUT   -- Completely update an existing record
                 PATCH -- Partially update an existing record
                 DEL   -- Delete a record
 
   Request headers: These are additional information about the request, such as the user agent making the request, 
                    the accepted language and encoding of the response, cookies, and more.

   Request body: This is the optional data that can be sent as part of the request, such as form data or JSON.
*/

/*
-- HTTP Response
   An HTTP response consists three things: Status Line, Response headers and Response body.
   Status line: This includes the HTTP protocol version, the status code, and the status message. The status code 
                is a three-digit number that indicates whether the request was successful, redirected, or encountered an error.

   Response headers: These are additional information about the response, such as the server type, the content type and 
                     length, cookies, and more.

   Response body: This is the actual content of the response, such as HTML, JSON, or binary data. 
*/

/*
-- Access Key
   An access key (also known as an API key or API token) is a unique identifier that is used to authenticate and 
   authorize access to an API (Application Programming Interface).
   API providers often require developers to obtain an access key to access their APIs. The access key is usually a 
   long alphanumeric string that is generated by the API provider and associated with a specific user or application. 
   When making an API call, the access key is typically included in the request headers or parameters to verify the identity 
   of the user or application making the request.

   Access keys serve several purposes, including:
   Authentication: Access keys allow the API provider to verify the identity of the user or application making the request.
   Authorization: Access keys can be used to restrict access to specific API resources or limit the number of requests that can be made.
   Tracking and billing: Access keys can be used to track API usage and bill users or applications for their usage.

   Overall, access keys are an important part of securing and managing access to APIs.
*/
