//var clase = new Object();
var profesores = new Array('Fernando','Marian', 'Daniel', 'Ana');
var asignaturas = new Array("DWEC","DWES", "Despliegue", "Diseño");
var horarioMap= new Map();
var hProfAsig;
/*var contador;
var posicion; */
var tam= profesores.length;

bGrabar.addEventListener("click", grabarHorario,false);

/*for (i=0;i>10;i++){
    console.log(i + "id boton ");
}
*/
/*var profesor=document.getElementById("cNombre");
var asignatura=document.getElementById("cAsignatura");
var dias=document.getElementById("cDias");
var hora=document.getElementById("cHora");
*/
var fila;
var columna;

function horarioAsignatura(profesor, asignatura, dias , hora){
    this.profesor=profesor;
    this.asignatura=asignatura;
    this.dias=dias;
    this.hora=hora;
    //this.guarda = guardadatos;

}

/*function guardadatos() {
    alert(this.id);
    clase[contador] = this;
    contador = contador + 1;
    posicion = contador;
}*/


function grabarHorario(){
    

    var profesor=document.getElementById("cNombre").value;
    var asignatura=document.getElementById("cAsignatura").value;
    var dias=document.getElementById("cDias").value;
    var hora=document.getElementById("cHora").value;
    
    var fila= hora;
    var columna= dias;

    for(i=0;i<tam;i++){
        if(profesor==profesores[i]){ 
            //alert("entra"+i)
            for(j=0;j<tam;j++){
                if(asignatura==asignaturas[j]){
                    //alert("son iguales")
                    
                    /*alert (profesor);
                    alert (asignatura);
                    alert (dias);
                    alert (hora);
                    */
                    hProfAsig = new horarioAsignatura(profesor, asignatura, dias, hora);  
                    /*alert (hProfAsig.profesor);
                    alert (hProfAsig.asignatura);
                    alert (hProfAsig.dias);
                    alert (hProfAsig.hora);*/
                }
            }
        }
    }
   
    

   // hProfAsig = new horarioAsignatura(profesor.value, asignatura.value, dias.value, hora.value);
    id="c"+fila+columna;

    
    var key = this.id;
    horariocelda = horarioMap.get(key); 
    horarioMap.set("c" + fila + columna, hProfAsig);
    
    document.getElementById(id).innerHTML=hProfAsig.asignatura;

}

function visualizaMapa(){
    /*var dia;
    var hora;
    switch (hProfAsig.dias){
        case "1": 
            dia="Lunes";
            break;
        case "2": 
            dia="Martes";
            break;
        case "3": 
            dia="Mierccoles";
            break;
        case "4": 
            dia="Jueves";
            break;
        case "5": 
            dia="Viernes";
            break;
    }

    switch (hProfAsig.hora){
        case "1": 
            hora="8h";
            break;
        case "2": 
            hora="9h";
            break;
        case "3": 
            hora="10h";
            break;
        case "4": 
            hora="11:30h";
            break;
        case "5": 
            hora="12:13h";
            break;
    }*/
    //alert(this.nodeValue);
    document.getElementById("cNombre").value=hProfAsig.profesor;
    document.getElementById("cAsignatura").value=hProfAsig.asignatura;
    document.getElementById("cDias").value=hProfAsig.dias;
    document.getElementById("cHora").value=hProfAsig.hora;

    //añadir=document.getElementById("añadido");
    //añadir.innerHTML="Profesor: "+hProfAsig.profesor+" Asignatura: "+ hProfAsig.asignatura+" Dia: "+ dia+" Hora: "+hora;
}

