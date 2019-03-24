function jogar() {
	if( document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false ){
		alert("Selecione uma opção!"); // Faz um alerta para o usuário escolher o tipo de jogada!
	}else{
		// Lógica principal que faz o jogo acontecer
		var sorteio = Math.floor(Math.random() * 3);
		switch(sorteio){
			case 0:
				document.getElementById("pc").src = "pcpedra.png";
				alert("O computador escolheu pedra!");
				break;
			case 1:
				document.getElementById("pc").src = "pcpapel.png";
				alert("O computador escolheu papel!");
				break;
			case 2:
				document.getElementById("pc").src = "pctesoura.png";
				alert("O computador escolheu tesoura!");
				break;
		}

		// Verificar o vencedor ou empate
		if( (document.getElementById("pedra").checked == true && sorteio == 0) 
			|| (document.getElementById("papel").checked == true && sorteio == 1) 
			|| (document.getElementById("tesoura").checked == true && sorteio == 2) ){

			document.getElementById("placar").innerHTML="Empate";
		
		}else if( (document.getElementById("pedra").checked == true && sorteio == 2) 
			|| (document.getElementById("papel").checked == true && sorteio == 0) 
			|| (document.getElementById("tesoura").checked == true && sorteio == 1) ){
			document.getElementById("placar").innerHTML="Jogador venceu!";
		}else{
			document.getElementById("placar").innerHTML="Computador venceu!";
		}

	}
}

function resetar() { // Limpa o placar e coloca a imagem do computador de volta para a default
	document.getElementById("pc").src("pc.png");
	document.getElementById("placar").innerHTML="";
}