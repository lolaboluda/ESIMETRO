
$(document).ready(function() { 
    console.log( "ready!" );
    //click a elegir categoria
    $("#index-link").click(function () {
        console.log( "click!" );
        $("body").load("ElegirCiclo.php");
        }
    );

    //click en una categoria
    $("#ciclos-link").click(function () {
        console.log( "click!" );
        ObtenerUltimoUsuario();
        $("body").load("Pregunta.php");
        }
    );


    function insertarEstadisticas(){
        //llamar al stored 
    } 
});

//$( "#main-container" ).load( "Pregunta.php #pregunta-container" );
