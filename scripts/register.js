function writeto(){
    var database = firebase.database();
    var x = document.getElementById("regform");
    var Name = x.elements[0].value;
    firebase.database().ref('Registrations/').push({
        [Name]:{
            Name:x.elements[0].value,
            College:x.elements[1].value,
            LaptopNeeded:x.elements[3].value,
            Year:x.elements[5].value,
            Email:x.elements[6].value,
            PhoneNumber:x.elements[7].value
        }
    });
  //   firebase.database().ref('users/').set({
  //   username: x.elements[0].value
  // });

    var r=confirm("You have successfully registered as " + x.elements[0].value);
}
