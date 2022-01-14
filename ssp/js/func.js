function totalIt() {
   var input = document.getElementsByName("food");
   var total = 0;
   var s="";
   for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
         total += parseFloat(input[i].value);
         s += input[i].id+ " ";
      }
   }
   document.getElementById("Price").value = total;
   document.getElementById("Category").value = s;
}