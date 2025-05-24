<?php
        $server = "localhost";
        $user = "root";
        $pass = "";
        $bd = "sena";

        try{
            $conex = mysqli_connect($server, $user, $pass, $bd);
            echo "Conexión Exitosa....!";
        }catch(Exception){
            print( "Error de conexión, Server no disponible");

        }

?>