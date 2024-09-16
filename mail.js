const firebaseConfig = {
    apiKey: "AIzaSyAe_AHQLyvohJyZHQfg36pNyUYxpUayY4s",
    authDomain: "farmers-direct-market-access.firebaseapp.com",
    databaseURL: "https://farmers-direct-market-access-default-rtdb.firebaseio.com",
    projectId: "farmers-direct-market-access",
    storageBucket: "farmers-direct-market-access.appspot.com",
    messagingSenderId: "446025358622",
    appId: "1:446025358622:web:8d3c2a74069f254b9b3d0f",
    measurementId: "G-XE1GM6DLFV"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };