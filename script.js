function go(page){
  window.location.href = page;
}

function homeAI(){
  let budget = document.getElementById("budget").value;
  document.getElementById("result").innerHTML =
  "Your Budget: ₹" + budget +
  "<br><br>Suggested Platforms:" +
  "<br>Amazon" +
  "<br>Flipkart" +
  "<br>IKEA";
}
