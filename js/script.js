// var data=document.querySelector(".b");
// var image=document.createElement("img");
// image.src="img/profile.png";
// data.appendChild(image);
// function ajax(file,callback) {
//   var ob= new XMLHttpRequest();
//    ob.overrideMimeType("application/json");
//    ob.open("GET",file,true);//ajax is synchronus
//    ob.onreadystatechange=function () {
//      if(ob.readyState==4 && ob.status=="200"){
//        callback(ob.responseText);
//      }
//    }
//    ob.send(null);
// }
// ajax("data.json",function(x) {
//  var data=JSON.parse(x);
//  myData(data.obj,data.hyma);
// });
//fetch & promises method

// function myData(a,b) {
//  let head=document.createElement("h1");
//  head.textContent=a.name;
//  data.appendChild(head);
//
//  let head1=document.createElement("footer");
//  head1.textContent=a.mob;
//  data.appendChild(head1);
//
//  let head2=document.createElement("p");
//  head2.textContent=a.email;
//  data.appendChild(head2);
//
//  let head3=document.createElement("h2");
//  head3.textContent=b;
//  data.appendChild(head3);
//
// }
