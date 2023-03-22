document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // This is for form sub
 
    // The confirmtion of speed
    let vehiclespeed = parseInt(document.getElementById('speed').value);
 
    // do away with point execution
    let Points = 0;
    if (vehiclespeed <= 70) {
     document.getElementById('result').textContent = "Ok";
    } else {
     Points = Math.floor((vehiclespeed - 70) / 5);
     if (Points > 12) {
      document.getElementById('result').textContent = "License suspended";
     } else {
      document.getElementById('result').textContent = "Your vehicle speeding points are, " + Points;
     }
    }