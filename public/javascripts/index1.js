// Js for Main Page
var imgsrc = [
  "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1469443168033-4623821959af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1523568129082-a8d6c095638e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80",
  "https://images.unsplash.com/photo-1514294393539-47d3b28b819d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80",
];
var imgtitle = [
  "Venice Italy",
  "Mountain Lake, Austria",
  "Greece",
  "Sydney, Australia",
  "Moraine Lake, Canada",
  "Bali, Indonesia",
];
var pagesource = [
  "https://unsplash.com/photos/uZt8wD1rgeo",
  "https://unsplash.com/photos/EXbGG5dBZKw",
  "https://unsplash.com/photos/JXsxH2shRgY",
  "https://unsplash.com/photos/ImhjEeh7pZg",
  "https://unsplash.com/photos/rjfOdiB7k-E",
  "https://unsplash.com/photos/1kdIG_258bU",
];

export var data = [
  {
    id: 1,
    imgsrc:
      "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
    imgtitle: "Venice Italy",
    pagesource: "https://unsplash.com/photos/uZt8wD1rgeo",
  },
  {
    id: 2,
    imgsrc:
      "https://images.unsplash.com/photo-1469443168033-4623821959af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
    imgtitle: "Mountain Lake, Austria",
    pagesource: "https://unsplash.com/photos/EXbGG5dBZKw",
  },
  {
    id: 3,
    imgsrc:
      "https://images.unsplash.com/photo-1523568129082-a8d6c095638e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80",

    imgtitle: "Greece",
    pagesource: "https://unsplash.com/photos/JXsxH2shRgY",
  },
  {
    id: 4,
    imgsrc:
      "https://images.unsplash.com/photo-1514294393539-47d3b28b819d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",

    imgtitle: "Sydney, Australia",
    pagesource: "https://unsplash.com/photos/ImhjEeh7pZg",
  },
  {
    id: 5,
    imgsrc:
      "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    imgtitle: "Moraine Lake, Canada",
    pagesource: "https://unsplash.com/photos/rjfOdiB7k-E",
  },
  {
    id: 6,
    imgsrc:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80",

    imgtitle: "Bali, Indonesia",
    pagesource: "https://unsplash.com/photos/1kdIG_258bU",
  },
];

function loadCard() {
  divforcard = document.getElementById("mycard");
  for (let i = 0; i < imgsrc.length; i++) {
    //Create Card Element and set class and style
    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card m-4 d-flex align-self-stretch");
    cardDiv.style.width = "25rem";

    //Create div for image, add class and style to it
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "d-flex flex-fill shadow ");
    //Create img element, style it, add src
    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top rounded");
    img.src = imgsrc[i];
    img.alt = imgtitle[i];
    img.style.maxHeight = "20rem";
    img.style.objectFit = "fill";

    img.addEventListener("click", () => {
      mywindow = window.open(pagesource[i]);
      setTimeout(function () {
        mywindow.close();
      }, 5000);
    });
    //Create div for card detail, set class and style
    var cardDetDiv = document.createElement("div");
    cardDetDiv.setAttribute(
      "class",
      "card-body text-center d-flex flex-column mt-auto"
    );

    //Create h5 for image title, set class and title
    var imgTitle = document.createElement("h5");
    imgTitle.setAttribute(
      "class",
      "card-title fs-2 text-center justify-self-end "
    );
    imgTitle.innerText = imgtitle[i];

    //Create p for image description, set class and title
    //Here all p elements are given a fixed random description
    var cardDesc = document.createElement("p");
    cardDesc.setAttribute("class", "card-text text-center justify-self-end");
    cardDesc.innerText =
      "Some quick example text to build on the card title and make up the bulk of the card's content.";
    //
    let button = document.createElement("a");
    button.setAttribute("class", "btn btn-primary mt-auto");
    button.innerText = "More Info";
    button.href = pagesource[i];

    cardDetDiv.appendChild(imgTitle), cardDetDiv.appendChild(cardDesc);
    cardDetDiv.appendChild(button);

    imgDiv.appendChild(img), cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(cardDetDiv);
    divforcard.appendChild(cardDiv);
  }
}

//Function to generate alert upon form reset
function onReset() {
  alert("Are you sure you want to reset");
}

function onSubmit() {
  alert("Form Submitted");
}

// Focus function to add hint to the selected field
function focusFunction(x) {
  //gets the id of the input element and inject message as p element
  switch (x.id) {
    case "InputEmail1":
      var p = "<p> Please enter email Address <p/>";
      document.getElementById("InputEmail1").insertAdjacentHTML("afterend", p);
      break;
    case "InputPassword":
      var p = "<p> Please enter password (6-20 characters) <p/>";
      document
        .getElementById("InputPassword")
        .insertAdjacentHTML("afterend", p);
      break;
    case "InputPassword1":
      var p = "<p> Please retype the password <p/>";
      document
        .getElementById("InputPassword1")
        .insertAdjacentHTML("afterend", p);
      break;
    case "InputName":
      var p = "<p> Please enter your full name <p/>";
      document.getElementById("InputName").insertAdjacentHTML("afterend", p);
      break;
    case "InputPhone":
      var p = "<p> Please enter your phone number (Format: xxx-xxx-xxxx) <p/>";
      document.getElementById("InputPhone").insertAdjacentHTML("afterend", p);
      break;
    case "InputAddress":
      var p = "<p> Please enter your address <p/>";
      document.getElementById("InputAddress").insertAdjacentHTML("afterend", p);
      break;
    case "PostalCode":
      var p = "<p> Please enter your Postal Code(Format: A2A-2B2) <p/>";
      document.getElementById("PostalCode").insertAdjacentHTML("afterend", p);
      break;
    case "InputEmailLogin":
      var p = "<p> Please enter email Address. <p/>";
      document
        .getElementById("InputEmailLogin")
        .insertAdjacentHTML("afterend", p);
      break;
    case "InputPasswordLogin":
      var p = "<p> Please enter password (6-20 characters) <p/>";
      document
        .getElementById("InputPasswordLogin")
        .insertAdjacentHTML("afterend", p);
      break;
  }
}

//  Blur function removes the injected element afterwards
function blurFunction(x) {
  //Postal Code Verification
  if (x.id == "PostalCode") {
    x.nextElementSibling.remove();
    var regex =
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    var match = regex.exec(x.value);
    if (match) {
      x.nextElementSibling.remove();
    } else {
      var p = "<p> Please enter your Postal Code in correct format <p/>";
      x.insertAdjacentHTML("afterend", p);
      setTimeout(function myfunction() {
        x.nextElementSibling.remove();
      }, 2000);
    }
  } else x.nextElementSibling.remove();
}
