function addElt(){



  var para = document.createElement("p");
  para.insertAdjacentHTML('afterbegin', '<input type="checkbox" id="me" name="" value="">');
  var node = document.createTextNode(document.getElementById("Input").value);
   para.appendChild(node);


   var element = document.getElementById("todoBody");
   element.appendChild(para); /*afterbegin

element.appendChild(para);
   var element = document.getElementById("todoBody");
   element.insertBefore(para,node); */
}
