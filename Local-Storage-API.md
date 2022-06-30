# Local Storage API 
It is an API that gives a simple interface to store data and files on the user's computer, across browser sessions

*Session Storage*: Data is stored for just that session, and once browser is closed the data is lost. But, the data is retained even when the page is refreshed.

Local Storage API methods:

- to add item into Local Storage: `localStorage.setItem('weather', 'sunny')`

<div align="center">

![localstorage-1](https://user-images.githubusercontent.com/83855905/175992208-adf68dc1-962a-4bb6-8b8d-627ed8fb217b.png)
  
</div>

<div align="center">

![image](https://user-images.githubusercontent.com/83855905/175992580-ce0c008c-5af7-486c-9d9f-87581c2b276c.png)

</div>

- to get item from the Local Storage: `localStorage.getItem('weather', 'sunny')`

- to remove item from Local Storage: `localStorage.removeItem('weather', 'sunny')`

- to clear all items from Local Storage: `localStorage.clear()`


