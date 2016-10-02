var personName;
var phoneNumbers;
var allContacts =[];
 
 function contacts(name , number){
 personName= name;
 phoneNumbers=[];
 phoneNumbers.push(number);
 };

function showAdd() {
  personName = prompt("Enter full name");
   phoneNumbers = prompt("Enter phone number");
  
};

 function addContacts(name,number){
for (var i =0 ; i <allContacts.length(); i++) {

	if(allContacts[i].includes(name)){
allContacts[i].personel.phoneNumbers.push(number);
	}
	else if(!allContacts[i].includes(name)){allContacts.push(person =new contacts(name,number))}
}




this.allContacts.push(name,number);


}
