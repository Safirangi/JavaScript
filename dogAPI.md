#### HTML FILE

```
<html>
<head>
	<title>API Example</title>
	<script src="api.js"></script>
</head>

<body>
	<h5>dog images<h5>

	<img src="" alt=""/>

	<h6>  </h6>

</body>
</html>
```

#### JAVASCRIPT FILE
```
const url =  "https://dog.ceo/api/breeds/image/random"

let image = document.querySelector("img").value;        //ERROR

fetch(url)
  .then(res => res.json())  //parse response as JSON
  .then(data => {
    console.log(data)     //object is sent as a response
  })
  .catch(err => {
    console.log(`Error ${err}`)
  });
  
```
