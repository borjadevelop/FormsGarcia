var formElement=null;

var numeroSecreto=null;
var numeroSecreto2=null;

var respuestaSelect=null;
var respuestaSelect2=null;

var respuestasCheckbox = [];
var respuestasCheckbox2 = [];

var respuestasRadio = [];
var respuestasRadio2 = [];

var respuestaMultiple = null;
var respuestaMultiple2 = null;


var nota = 0;  //nota de la prueba sobre 10 puntos (hay 10 preguntas)

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
   
   corregirText();
   corregirText2();

   corregirSelect();
   corregirSelect2();
   
   corregirCheckbox();
   corregirCheckbox2();

   presentarNota();   
   return false;
 }
 
 //LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "https://cdn.rawgit.com/onesoco/FormsGarcia/98d79a00/xml/preguntas.xml", true);
 xhttp.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
 
//texto 1
 var tituloInput=xmlDoc.getElementById("bodatoda001").getElementsByTagName("title")[0].innerHTML;
 ponerDatosInputHtml(tituloInput);
 numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 
//texto 2
 var tituloInput2=xmlDoc.getElementById("bodatoda002").getElementsByTagName("title")[0].innerHTML;
 ponerDatosInputHtml2(tituloInput2);
 numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 
/*---------------------------------------------------------------------------------------------------------------*/

 //select 5
 var tituloSelect=xmlDoc.getElementById("bodatoda005").getElementsByTagName("title")[0].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("bodatoda005").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("bodatoda005").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 
 //select 10
 var tituloSelect2=xmlDoc.getElementById("bodatoda010").getElementsByTagName("title")[0].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("bodatoda010").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("bodatoda010").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml2(tituloSelect2,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 
/*---------------------------------------------------------------------------------------------------------------*/
 
//checkbox 3
 var tituloCheckbox = xmlDoc.getElementById("bodatoda003").getElementsByTagName("title")[0].innerHTML;
 var opcionesCheckbox = [];
 var nopt = xmlDoc.getElementById("bodatoda003").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("bodatoda003").getElementsByTagName('option')[i].innerHTML + "<br>";
 }  
 ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("bodatoda003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("bodatoda003").getElementsByTagName("answer")[i].innerHTML;
 }

//checkbox 4
 var tituloCheckbox2 = xmlDoc.getElementById("bodatoda004").getElementsByTagName("title")[0].innerHTML;
 var opcionesCheckbox2 = [];
 var nopt = xmlDoc.getElementById("bodatoda004").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox2[i]=xmlDoc.getElementById("bodatoda004").getElementsByTagName('option')[i].innerHTML  + "<br>";
 }  
 ponerDatosCheckboxHtml2(tituloCheckbox2,opcionesCheckbox2);
 var nres = xmlDoc.getElementById("bodatoda004").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox2[i]=xmlDoc.getElementById("bodatoda004").getElementsByTagName("answer")[i].innerHTML;
}

/*---------------------------------------------------------------------------------------------------------------*/
//radio 6
 var tituloRadio = xmlDoc.getElementById("bodatoda006").getElementsByTagName("title")[0].innerHTML;
 var opcionesRadio = [];
 var nopt = xmlDoc.getElementById("bodatoda006").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio[i]=xmlDoc.getElementById("bodatoda006").getElementsByTagName('option')[i].innerHTML  + "<br>";
 }  
 ponerDatosRadioHtml(tituloRadio,opcionesRadio);
 var nres = xmlDoc.getElementById("bodatoda006").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio[i]=xmlDoc.getElementById("bodatoda006").getElementsByTagName("answer")[i].innerHTML;
 }
 
 //radio 7
 var tituloRadio2 = xmlDoc.getElementById("bodatoda007").getElementsByTagName("title")[0].innerHTML;
 var opcionesRadio2 = [];
 var nopt = xmlDoc.getElementById("bodatoda007").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio2[i]=xmlDoc.getElementById("bodatoda007").getElementsByTagName('option')[i].innerHTML  + "<br>";
 }  
 ponerDatosRadioHtml2(tituloRadio2,opcionesRadio2);
 var nres = xmlDoc.getElementById("bodatoda007").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio2[i]=xmlDoc.getElementById("bodatoda007").getElementsByTagName("answer")[i].innerHTML;
 }
 
 /*---------------------------------------------------------------------------------------------------------------*/
 
 //multiple 8
 var tituloMultiple=xmlDoc.getElementById("bodatoda008").getElementsByTagName("title")[0].innerHTML;
 var opcionesMultiple = [];
 var nopt = xmlDoc.getElementById("bodatoda008").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesMultiple[i] = xmlDoc.getElementById("bodatoda008").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultipleHtml(tituloMultiple,opcionesMultiple);
 respuestaMultiple=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

 //multiple 9
 var tituloMultiple2=xmlDoc.getElementById("bodatoda009").getElementsByTagName("title")[0].innerHTML;
 var opcionesMultiple2 = [];
 var nopt = xmlDoc.getElementById("bodatoda009").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesMultiple2[i] = xmlDoc.getElementById("bodatoda009").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultipleHtml2(tituloMultiple2,opcionesMultiple2);
 respuestaMultiple=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

}

//****************************************************************************************************
//implementación de la corrección

function corregirText(){
  var s=formElement.elements[0].value;     
  if (s==numeroSecreto) {
   darRespuestaHtml("P1: Exacto!");
   nota +=1;
  }
  else {
    if (s>numeroSecreto) darRespuestaHtml("P1: Te has pasado");
    else darRespuestaHtml("P1: Te has quedado corto");
  }
}

function corregirText2(){
  var s=formElement.elements[0].value;     
  if (s==numeroSecreto) {
   darRespuestaHtml("P2: Exacto!");
   nota +=1;
  }
  else {
    if (s>numeroSecreto) darRespuestaHtml("P2: Te has pasado");
    else darRespuestaHtml("P2: Te has quedado corto");
  }
}
//****************************************************************************************************

function corregirCheckbox(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox.length; j++) {
     if (i==respuestasCheckbox[j]) escorrecta[i]=true;
    }
   } 
  }
  for (i = 0; i < f.color.length; i++) {
   if (f.color[i].checked) {
    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: "+i+" incorrecta");
    }   
   }
  }
}


function corregirCheckbox2(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox2.length; j++) {
     if (i==respuestasCheckbox2[j]) escorrecta[i]=true;
    }
   } 
  }
  for (i = 0; i < f.color.length; i++) {   
   if (f.color[i].checked) {
    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P4: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P4: "+i+" incorrecta");
    }   
   }
  }
}

//****************************************************************************************************

function corregirSelect(){
  var sel = formElement.elements[1];  
  if (sel.selectedIndex==respuestaSelect) {
   darRespuestaHtml("P5: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P5: Incorrecto");
}


function corregirSelect2(){
  var sel = formElement.elements[1];  
  if (sel.selectedIndex==respuestaSelect2) {
   darRespuestaHtml("P6: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P6: Incorrecto");
}



//****************************************************************************************************

//****************************************************************************************************
// poner los datos recibios en el HTML

function ponerDatosInputHtml(t){
 document.getElementById("tituloInput").innerHTML = t;
}

function ponerDatosInputHtml2(t){
 document.getElementById("tituloInput2").innerHTML = t;
}


function ponerDatosSelectHtml(t,opt){
  document.getElementById("tituloSelect").innerHTML= t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosSelectHtml2(t,opt){
  document.getElementById("tituloSelect2").innerHTML= t;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv');
 document.getElementById('tituloCheckbox').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}

function ponerDatosCheckboxHtml2(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv2');
 document.getElementById('tituloCheckbox2').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}

//radio 6
function ponerDatosRadioHtml(t,opt){
 var radioContainer=document.getElementById('radioDiv');
 document.getElementById('tituloRadio').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color2_"+i);
    input.type="radio";
    input.name="color2";
    input.id="color2_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}

//radio 7
function ponerDatosRadioHtml2(t,opt){
 var radioContainer=document.getElementById('radioDiv2');
 document.getElementById('tituloRadio2').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color2_"+i);
    input.type="radio";
    input.name="color2";
    input.id="color2_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}

//multiple 8
function ponerDatosMultipleHtml(t,opt){
  document.getElementById("tituloMultiple").innerHTML= t;
  var select = document.getElementsByTagName("multiple")[1];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    //select.options.add(option);
 }  
}

//multiple 9
function ponerDatosMultipleHtml2(t,opt){
  document.getElementById("tituloMultiple2").innerHTML= t;
  var select = document.getElementsByTagName("multiple2")[1];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    //select.options.add(option);
 }  
}

//****************************************************************************************************
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
}

function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}