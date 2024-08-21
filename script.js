/* Back to Top Taget ur https://www.w3schools.com/howto/howto_js_scroll_to_top.asp*/
topButton = document.getElementById("backtoTop");
window.onscroll = function () {
scrollFunction()
scrollMenuTop()
scrollOrderBtn()
};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
topButton.style.display = "block";
} else {
topButton.style.display = "none";
}
}
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/* Back to Top*/
topMenu = document.getElementById("navbar");
function scrollMenuTop(){
if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
topMenu.style.position = "sticky";
topMenu.style.top = "0px";
} else {
topMenu.style.position = "";
}
}
newOrderBtn = document.getElementById("goToOrder");
function scrollOrderBtn(){
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
newOrderBtn.style.display = "block";
} else {
newOrderBtn.style.display = "none";
}
}
var bestallningNmr = 1;
var submit = document.getElementById("sub");
submit.onclick = function submitOrder() {
console.log(bestallningNmr);
var bestallTxt = "bestallning";
var bestallNot = "noter";
if(!document.getElementById(bestallTxt)){
var bestallning = document.getElementById("formtest1").value;
var noter = document.getElementById("formtest2").value;
document.getElementById("formtest1").value = "";
document.getElementById("formtest2").value = "";
document.getElementById(bestallTxt).innerText = bestallning;
document.getElementById(bestallNot).innerText = noter;
bestallningNmr = bestallningNmr + 1;
} else {
var bestallning = document.getElementById("formtest1").value;
var noter = document.getElementById("formtest2").value;
document.getElementById("formtest1").value = "";
document.getElementById("formtest2").value = "";
document.getElementById(bestallTxt).innerText = bestallning;
document.getElementById(bestallNot).innerText = noter;
bestallningNmr = bestallningNmr + 1;
}
document.getElementById("bestallPris").innerText = "Summa: " + total + "kr";
Reset();
}
var total = 0;
function Subtract(clicked_id) {
var id = parseInt(clicked_id);
var x = parseInt(document.getElementById(id).innerHTML);
  var strr = document.getElementById("title"+id).innerHTML;
var res = strr.replace(/\D/g, '');
var tal = parseInt(res);
var str = document.getElementById("formtest1").value;
if (x > 0) {
var y = x-1;
document.getElementById(id).innerHTML = y;
}
if(str.search(document.getElementById("title"+id).innerText) == -1 )
{
//do nothing
}
else if (str.search(document.getElementById("title"+id)) > -1)
{
if(y > 0){
total = total - tal;
var replace = str.replace(document.getElementById("title"+id).innerText + " " + "x" + x + " ",
document.getElementById("title"+id).innerText + " " + "x" + y + " ");
document.getElementById("formtest1").value = replace;
} else {
total = total - tal;
replace = str.replace(document.getElementById("title"+id).innerText + " " + "x" + x + " ", "");
document.getElementById("formtest1").value = replace;
}
}
console.log("Totalen är: " + total + " Senast borttagna pris: " + res + " kr");
return total;
}
function Add(clicked_id) {
var id = parseInt(clicked_id);
var x = parseInt(document.getElementById(id).innerHTML);
var y = x+1;
var strr = document.getElementById("title"+id).innerHTML;
var res = strr.replace(/\D/g, '');
var tal = parseInt(res);
total = total + tal;
var str = document.getElementById("formtest1").value;
var newItem;
if(str.search(document.getElementById("title"+id).innerText) == -1 )
{
newItem = document.getElementById("title"+id).innerText + " " + "x" + y + " ";
document.getElementById("formtest1").value += newItem;
}
else if (str.search(document.getElementById("title"+id)) > -1)
{
var replace = str.replace(document.getElementById("title"+id).innerText + " " + "x" + x + " ",
document.getElementById("title"+id).innerText + " " + "x" + y + " ");
document.getElementById("formtest1").value = replace;
}
document.getElementById(id).innerHTML = y;
console.log("Totalen är: " + total + " Senast tillagd pris: " + res + " kr");
return total;
}
function Reset(){
var noll = 0;
var el;
for(var i = 1; el = document.getElementById(i); i++) {
el.innerHTML = noll;
}
document.getElementById("formtest1").value = "";
  }
