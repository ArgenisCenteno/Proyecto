                                        //Buscador de contenido

//Estas son las variables

bars_search = document.getElementById("bars-search");
inputSearch = document.getElementById("input-search");
boxSearch = document.getElementById("box-search");
cover_search = document.getElementById("cover-search"); 
icon_search = document.getElementById("icon-search");


//Ejecución de funciones

icon_search.addEventListener("click", mostrar_buscador);
document.getElementById("cover-search").addEventListener("click", ocultar_buscador);




//Funcion para mostrar el buscador

function mostrar_buscador(){
    bars_search.style.top= "85px";
    cover_search.style.display = "block";
    inputSearch.focus();

}

//Función para ocultar el buscador

function ocultar_buscador(){
    bars_search.style.top = "-80px";
    cover_search.style.display = "none";
    inputSearch.value = "";
    boxSearch.style.display = "none";
}

//Filtrado de busqueda



document.getElementById("input-search").addEventListener("keyup", buscador_interno);
function buscador_interno(){

   
    filter = inputSearch.value.toUpperCase();
    li = boxSearch.getElementsByTagName("li");

// Recorrido elementos mediantes li

for (i = 0; i < li.length; i++){

    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if(textValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        boxSearch.style.display = "block";
    

        if (inputSearch.value === ""){
        boxSearch.style.display = "none";
        }
    
    }else{
        li[i].style.display = "none";
        }

    }

}
