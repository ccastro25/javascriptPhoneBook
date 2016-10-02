" use strict ";

var person;
var allContacts=[];

function Contact(name,number) {
    this.userName = name;
   this.phoneNumber=[number];
   
}


function listAllNames() {
	display.innerHTML ="";
	if(allContacts.length===0){display.innerHTML="Contact list is empty"}
		else{
  	for(var i =0;i< allContacts.length;i++){
  		display.innerHTML += allContacts[i].userName+"<br>";
  			}}
}

function listAllNumbers() {
	display.innerHTML ="";
	if(allContacts.length===0){display.innerHTML="Contact list is empty"}
 else{for(var i =0;i< allContacts.length;i++){
  	display.innerHTML += allContacts[i].phoneNumber+"<br>";
  			}}
};

function showAdd() {
 this. name = prompt("Enter full name");
  this.number = prompt("Enter phone number");
 addContact(name,number);
 }

function addContact(name,number){
	count =0;
	if(allContacts.length===0){ person = new Contact(name,number);	
 allContacts.push(person);}
 else{
	for(var go in allContacts){
		console.log(allContacts[count].userName+ " and the "+name)
		if(allContacts[go].userName==name)	
			{ 
				
	allContacts[go].phoneNumber.push(number); console.log("trying topush"); }
	
		else if(allContacts[go].userName!=name& count == allContacts.length-1){ person = new Contact(name,number);
				allContacts.push(person);console.log("ignore it")}
	
count++;
	}
 	
 }}
 


function showRemove() {
	var personRemove;
	display.innerHTML ="";
  var remove = prompt("Enter name to remove");
  for(var i =0;i< allContacts.length;i++){
  		if(allContacts[i].userName==remove){
  		personRemove= allContacts[i].userName;
  		display.innerHTML =personRemove+" is removed form contacts";
  		delete allContacts[i];

  	allContacts=	bouncer(allContacts);	
  	}

  		else if (i===allContacts.length-1&&personRemove.isEmpty()){
  		display.innerHTML ="Contact not found";
  		}}}

function showLookup() {
	display.innerHTML ="";
  var lookup = prompt("Enter number to lookup");
  	for(var i =0;i< allContacts.length;i++){
  			if(allContacts[i].userName == lookup){
  		display.innerHTML = allContacts[i].userName+"<br>"+allContacts[i].phoneNumber;}
  		else if(i===allContacts.length-1&&allContacts[i].userName == lookup){
  			display.innerHTML += "Contact not found";
  		}
  
}}


function bouncer(arr) {
  var filteredArray = arr.filter(Boolean);
  return filteredArray;
}



var display = document.getElementById("display");







