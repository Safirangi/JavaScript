# Fetch API

- For making a request and fetching a resource, use the fetch() method.
- The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
- It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers

A basic fetch request is really simple to set up:
```
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of fetch() takes one 
argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise 
that resolves with a Response object.
