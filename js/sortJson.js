//Sort Json on basis of key
module.exports = {
    sortData: function sortJsonDataByKey(JsonData, key){
        return JsonData.sort(function(inputval1, inputval2){
            var inputvaluekey1 = inputval1[key]; 
            var inputvaluekey2 = inputval2[key];
            return ((inputvaluekey1 < inputvaluekey2) ? -1 : ((inputvaluekey1 > inputvaluekey2) ? 1 : 0));
        });
    }
};