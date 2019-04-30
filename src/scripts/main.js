//select location of output
const outEl = document.querySelector("#output");

//add a heading that does not change
outEl.innerHTML = "<h1>Active Businesses</h1>";


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
function showBusiness(business) {
  return `<div>${business.companyName}</div>`;
}

let newStuff = businesses.map(showBusiness);
outEl.innerHTML += newStuff.join(`<hr>`);

