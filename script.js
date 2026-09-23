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
function showLoading(id, callback){
  const box = document.getElementById(id);
  box.innerHTML = "🤖 Analyzing your budget...";
  setTimeout(callback, 1200);
}
}
