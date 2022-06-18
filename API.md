# API : Application Programming Interface
A simple interface for some complex action. It lets one thing communicate with another thing
without having to know how things are implemented.

The interface here basically means an *url*, which sends a request to a *server*. The server
is going to hear that request and send some response.

<div align="center">

![image](https://user-images.githubusercontent.com/83855905/174351053-a790dd1c-a5f3-44a3-a937-2e3aba7c696c.png)

</div>

The response is in the form of JSON (JavaScript Object Notation), which basically an object
coming back from a server. API returns a JSON object that we can use within the apps.

e.g.
```
//syntax to make a request to an url
fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())  //parse response as JSON
  .then(data => {
    console.log(data)     //object is sent as a response
  })
  .catch(err => {
    console.log(`Error ${err}`)
  });
  
/* The 'fetch()' method is used to send the request to the server, which returns an
object as its response.*/
```

Code interacts with APIs using one or more JavaScript objects, which serve as containers for the data the API uses (contained in object properties), and the functionality the API makes available (contained in object methods).

Some APIs need **Query Parameters** to return the correct data:
```
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// ?s=margarita is a query parameter

fetch(url) 
  .then(res => res.json())  //parse response as JSON
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
```
