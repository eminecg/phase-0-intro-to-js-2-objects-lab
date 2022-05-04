// Write your solution in this file!
const employee={
    name:"emine",
    streetAdress:  "incilipinar",


}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmp={...employee,[key]:value};
    return newEmp;
    
    
    
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){

    const newObj={...employee};

        delete newObj[key];
        return newObj;

}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key] ;
    return employee;
}