//select location of output
const outEl = document.querySelector("#output");

//add a heading that does not change
outEl.innerHTML = `<h1>Active Businesses</h1> 
    <h2>Big Spenders</h2>`;


//forEach()
// businesses.forEach(business => {
//     outEl.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <section>
//         ${business.addressFullStreet},
//         ${business.addressStateCode}
//         </section>
//         `;
//     outEl.innerHTML += "<hr>";
// });


//filter()
// businesses.filter(biz => biz.addressStateCode === "NY")
//   .forEach(business => {
//     outEl.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <section>
//         ${business.addressFullStreet},
//         ${business.addressStateCode}
//         </section>
//         `;
//     outEl.innerHTML += "<hr>";
//   });


//map() seperates with commas
// function showBusiness(business) {
//     return `<div>${business.companyName}</div>`
// }

// let newStuff = businesses.map(showBusiness);
// outEl.innerHTML += newStuff;


//join() makes a string
// function showBusiness(business) {
//   return `<div>${business.companyName}</div>`;
// }

// let newStuff = businesses.map(showBusiness).join("");
// outEl.innerHTML += newStuff;


// businesses
//   .filter(biz => biz.orders >= 9000)
//   .forEach(business => {
//     outEl.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <section>
//         ${business.orders}
//         </section>
//         `;
//     outEl.innerHTML += "<hr>";
//   });

//one way to get a company who makes an order over 9000
function orderGreaterThan(value) {
  if (value > 9000) {
    return true;
  }
}
const bigSpenders = businesses.filter(business => {
  let businessSpender = false;
  business.orders.forEach(order => {
    if (orderGreaterThan(order)) {
      businessSpender = true;
    }
  });
  return businessSpender;
});


//another way to get a company who makes an order over 9000
function checkDollar(order) {
  return order > 9000;
}

const biggerSpenders = businesses.filter(business => {
  return business.orders.find(checkDollar);
});

console.log("these are the bigger spenders", biggerSpenders)

//print this to the dom
for (i = 0; i < biggerSpenders.length; i ++) {
    outEl.innerHTML += (biggerSpenders[i].companyName) += `<hr>`;
}