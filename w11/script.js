// let companies = [

//     {
//         name: "Glow Beauty",
//         country: "Korea",
//         products: 120,
//         exportCountries: 15,

//         showInfo: function() {
//             console.log(this.name + " exports " + this.products +
//                         " cosmetic products to " +
//                         this.exportCountries + " countries.");
//         }
//     },

//     {
//         name: "Seoul Skin",
//         country: "Korea",
//         products: 80,
//         exportCountries: 10,

//         showInfo: function() {
//             console.log(this.name + " is from " + this.country);
//             console.log("It exports to " + this.exportCountries + " countries.");
//         }
//     },

//     {
//         name: "Beauty World",
//         country: "USA",
//         products: 200,
//         exportCountries: 25,

//         showInfo: function() {
//             console.log(this.name + " has " + this.products + " products.");
//         }
//     },

//     {
//         name: "Nature Cosmetics",
//         country: "France",
//         products: 150,
//         exportCountries: 20,

//         showInfo: function() {
//             console.log(this.name + " exports cosmetics to " +
//                         this.exportCountries + " countries.");
//         }
//     },

//     {
//         name: "Pure Skin",
//         country: "Japan",
//         products: 95,
//         exportCountries: 12,

//         showInfo: function() {
//             console.log(this.name + " has " + this.products +
//                         " cosmetic products.");
//         }
//     },

//     {
//         name: "Luxury Beauty",
//         country: "Italy",
//         products: 180,
//         exportCountries: 30,

//         showInfo: function() {
//             console.log(this.name + " is a luxury cosmetic company.");
//         }
//     },

//     {
//         name: "Fresh Face",
//         country: "Canada",
//         products: 70,
//         exportCountries: 8,

//         showInfo: function() {
//             console.log(this.name + " exports products to " +
//                         this.exportCountries + " countries.");
//         }
//     },

//     {
//         name: "K-Beauty Star",
//         country: "Korea",
//         products: 250,
//         exportCountries: 35,

//         showInfo: function() {
//             console.log(this.name + " is a Korean cosmetics exporter.");
//         }
//     },

//     {
//         name: "Natural Glow",
//         country: "Australia",
//         products: 110,
//         exportCountries: 18,

//         showInfo: function() {
//             console.log(this.name + " sells natural cosmetic products.");
//         }
//     },

//     {
//         name: "Global Beauty",
//         country: "Germany",
//         products: 300,
//         exportCountries: 40,

//         showInfo: function() {
//             console.log(this.name + " exports cosmetics to " +
//                         this.exportCountries + " countries.");
//         }
//     }
// ];

// companies.forEach(company => {
//     company.showInfo();
// });

// function getCompaniesByCountry(country){
//     let selectedCompanies = [];
//     companies.forEach(company=>{
//         selectedCompanies.push((company.country == country)? company.name : '');
//     });

//     return selectedCompanies.filter(company => company != '');
// }

// console.log(getCompaniesByCountry("Korea"));

