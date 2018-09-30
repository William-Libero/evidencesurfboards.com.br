<?php

	$uploaddir = 'uploads';

	$uploadfile = $uploaddir . $_FILES['arquivo']['name'];
	if(move_uploaded_file($_FILES['arquivo']['tmp_name'], $uploadfile)){
		echo "Arquivo enviado!";
	}else{
		echo "Arquivo não foi enviado!";
	}

?>