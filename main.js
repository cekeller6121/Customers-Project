// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

console.log("Hello, Clement");

fetch('https://randomuser.me/api/?results=12&nat=us')
.then(
  function(response) {
    if (response.status !== 200) {
      console.log("Looks like there was a problem. It's a trap!" + response.status);
      return
    } else {
      console.log(response.status);
    }

response.json().then(function(data){

  var folks = [];


  for (i = 0; i < data.results.length; i++) {
    var custPicture = data.results[i].picture.medium;
    console.log(custPicture);
    var custName = data.results[i].name.first + " " + data.results[i].name.last;
    console.log(custName);
    var custEmail = data.results[i].email;
    console.log(custEmail);
    var custStreet = data.results[i].location.street;
    console.log(custStreet);
    var custCityStateZip = data.results[i].location.city + " " + data.results[i].location.state + " " + data.results[i].location.postcode;
    console.log(custCityStateZip);
    var custPhoneNumber = data.results[i].phone;
    console.log(custPhoneNumber);
    var custInfoPacket = (custPicture + custName + custEmail + custStreet + custCityStateZip + custPhoneNumber);





  let htmlMarkup = `
    <div class="customerinfo">
      <ul>
        <li><img src="${custPicture}"></li>
        <li>${custName}</li>
        <li>${custEmail}</li>
        <li>${custStreet}</li>
        <li>${custCityStateZip}</li>
        <li>${custPhoneNumber}</li>
        </ul>
    </div>`

document.getElementById("customers").innerHTML += htmlMarkup;

    }
  })
});
