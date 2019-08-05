var customerList = require('./js/generateListOfCustomers.js');

// Requiring fs module in which  readFile function is defined. 
var fs = require('fs');

//File name that contains customers record in JSON format
var dataFilePath = './data/Customers.json';

//Read json file
fs.readFile(dataFilePath, (err, data) => { 
    if (err) throw err; 
    customerData = data.toString().split('\n');
    custimersInvited = customerList.customerList(customerData);
    console.log(custimersInvited);
})