document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fakestoreapi.com/products")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const productcontainer = document.querySelector("#product-container");
      console.log(productcontainer);
      console.log(data);

      data.foreach(function (eachElement) {
        console.log(eachElement);
      });
    });
});
