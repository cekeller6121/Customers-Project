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


  for (i = 0; i < data.results.length; i++) {
    var custPicture = data.results[i].picture.medium;
    console.log(custPicture);
    var custName = data.results[i].name.first + " " + data.results[i].name.last;
    console.log(custName);
    var custEmail = data.results[i].email;
    console.log(custEmail);
    var custStreet = data.results[i].location.street;
    console.log(custStreet);
    var custCityZip = data.results[i].location.city + " " + data.results[i].location.postcode;
    console.log(custCityZip);
    var custPhoneNumber = data.results[i].phone;
    console.log(custPhoneNumber);
    var custInfoPacket = (custPicture + custName + custEmail + custStreet + custCityZip + custPhoneNumber);
  }

  console.log(custInfoPacket + "custInfoPacket printed");



  let htmlMarkup = `
    <div class="customers">
      <ul>
        <li>${custInfoPacket}</li>
        <li>${custInfoPacket}</li>
        <li>${custInfoPacket}</li>
        <li>${custInfoPacket}</li>
        <li>${custInfoPacket}</li>
        <li>${custInfoPacket}</li>
        </ul>
    </div>`

document.getElementById("customers").innerHTML = htmlMarkup;

})});
