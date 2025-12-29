//4. Manipulating Attributes:
//element.getAttribute('attribute'):Gets the value of an attribute.
//element.setAttribute('attribute','value'): sets the value of an attribute
let link = document.querySelector("a");
let hrefValue = link.getAttribute("href");
link.setAttribute("href", "https://www.example.com");
