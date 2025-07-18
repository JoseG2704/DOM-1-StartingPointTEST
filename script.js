console.log("Hello! If you see this, the script is working.");


//#1 Select the section with an id of container without using querySelector.
const NoQuery = document.getElementById("container");

//#2 Select the section with an id of container using querySelector.

const WithQuery = document.querySelector("#container");

//#3 Select all of the list items with a class of "second".
const secondItems = document.getElementsByClassName("second");

//#4 Select a list item with a class of third, but only the list item inside of the ol tag.
const ThirdInOl = document.querySelector("ol .third");

//#5 Give the section with an id of container the text "Hello!".
NoQuery.innerText = "Hello!";

//#6 Add the class main to the div with a class of footer.
const ClassFooter = document.querySelector(".footer");
footer.classList.add("main");

//#7 Remove the class main on the div with a class of footer.
footer.classList.remove("main");

//#8 Create a new li element.
const LiElement = document.createElement("li");

//#9 Give the li the text "four".
LiElement.innerText = "four";

//#10 Append the li to the ul element.
const ul = document.querySelector("ul");
ul.appendChild(LiElement);

//#11 Loop over all of the lis inside the ol tag and give them a background color of "green".
const olLis = document.querySelectorAll('ol li');
olLis.forEach(li => {
    li.style.backgroundColor = 'green';
});

//#12 Remove the div with a class of footer.
const footerDiv = document.querySelector(".footer");

if (footerDiv) {
    footerDiv.remove();
}

// Try rewriting this without using querySelector
const header = document.getElementById("container");
console.log("header", header);
