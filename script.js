// const getProducts = async () => {
//   const res = await fetch(`http://localhost:3000/classicmodels/products`);
//   const products = await res.json();
//   console.log("products", products);
//   template = "<h4>Our cars: </h4>";
//   for (cars in products) {
//     template += `${products[cars].productName}`;
//   }
// };
const root = document.getElementById("root");

const getContactInfo = async () => {
  const res = await fetch(`http://localhost:3000/classicmodels/contact`);
  const contact = await res.json();
  console.log("contact", contact);
};

const getEmployees = async () => {
  const res = await fetch(`http://localhost:3000/classicmodels/employees`);
  const employees = await res.json();
  console.log("employees", employees);
};

document.addEventListener("click", () => {
  root.innerHTML = "";
  if (event.target && event.target.id === "start") {
    console.log("hej start");
    fetch(`http://localhost:3000/classicmodels/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        for (products in data) {
          root.innerHTML += `<div>${data[products].productName}</div>`;
        }
      });
  }
});

// let render = (template) => {
//   root.innerHTML = template();
// };

getEmployees();
getContactInfo();
