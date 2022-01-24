# JavaScript

My Learning log of JavaScript.

### 'var', 'let' and 'const'

- var: variable declarartions can be easily overwritten.
- let: re-declaring/re-assigning variables using 'let' keywords causes error.
- const: a const variable cannot be reassigned because it is constant. 

### Objects

Objects are real world models that consists of:

- Properties
- Methods
- Events

### How Web Browsers use Objects

Web Browser can view WebPage as two Objects: 

1. Window Object:
    - window / tab in browser is an example of Window Object.
2. Document Object: 
    - web page loaded in each window is example of Document Object.
    - web page has 'Document' object, each element(HTML) in the webpage is created as Objects. This model is called 'Document Object Model(DOM)'.

### How Web Browsers view a Web Page

1. Each page is a Document.
2. A DOM model is created for each page and then is stored in the memory.
3. 'Document Object' represents the whole document.
4. Different Objects are then created as 'Node' under the 'Document Object' like a Tree. 
