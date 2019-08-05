var calcDistance = require("./calculate_distance.js");
var sort = require("./sortJson.js");

module.exports = {
    //It will return a list of customers that are in 100 Km area, read data from json file
    customerList: function createListOfCustomers(jsondata){
        customerList = []
        dublinLatitude = 53.339428;
        dublinLongitude = -6.257664;
        for(key=0; key<jsondata.length-1;key++) {
            parsedData = JSON.parse(jsondata[key]);
        
            originLatitude = parsedData['latitude'];
            originLongitude = parsedData['longitude'];
            
            dist = calcDistance.calculate_distance(originLatitude, originLongitude, dublinLatitude, dublinLongitude);
        
            if(dist <= 100.00){
                temp = {};
                temp['userid'] = parsedData['user_id'];
                temp['name'] = parsedData['name'];
                customerList.push(temp);
            }else{
                continue;
            }      
        }    
        // Calling sort data function to sort customer list
        customerListSorted = sort.sortData(customerList, 'userid');
        return customerListSorted;  
    }
};