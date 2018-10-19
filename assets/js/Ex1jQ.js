$(function(){
	playerPoint = 0;
	computerPoint = 0;
	playerChoice = 0;
	computerChoice = 0;
	gameCounter = 0;
	victoryPercent = 0;
	defeatPercent = 0;
	$('#shifumi').click(function(){
		gameCounter ++;
		//Récupération valeur du joueur
		if ($('input[name=uniqueChoice]:checked').val() != 'on') {
			alert('Sélectionnez Pierre, Feuille ou Ciseaux')
		} else {
			if($('input[id=rock]:checked').val() == 'on') {
				playerChoice = 1;
			} else if($('input[id=sheet]:checked').val() == 'on') {
				playerChoice = 2;
			} else if($('input[id=scissors]:checked').val() == 'on') {
				playerChoice = 3;
			}
			//L'ordinateur doit choisir entre 1 et 3
			computerChoice = 0;
			while (computerChoice != 1 && computerChoice != 2 && computerChoice != 3){
				computerChoice = Math.floor(Math.random()*10);
			}
			//L'ordinateur montre son choix
			switch (computerChoice) {
				case 1:
					$('#iaRock').css('border','3px solid #080');
					$('#iaSheet').css('border','');
					$('#iaScissors').css('border','');
					console.log('Pierre');
					break;
				case 2:
					$('#iaSheet').css('border','3px solid #080');
					$('#iaRock').css('border','');
					$('#iaScissors').css('border','');
					console.log('Feuille');
					break;
				case 3:
					$('#iaScissors').css('border','3px solid #080');
					$('#iaRock').css('border','');
					$('#iaSheet').css('border','');
					console.log('Ciseaux');
					break;
			}
			// Conditions de victoire
			if (computerChoice == playerChoice) {//Egalité
				$('#divResult').text('Egalité')
				$('#borderResult').css('border','5px dashed #888');
			} else if (computerChoice < playerChoice) {
				if (playerChoice - computerChoice == 1) {//Victoire du joueur
					$('#divResult').text('Victoire !');
					$('#borderResult').css('border','5px dashed #88F');
					playerPoint ++;
				} else {//Défaite du joueur
					$('#divResult').text('Défaite...');
					$('#borderResult').css('border','5px dashed #A00');
					computerPoint ++;
				}
			} else {
				if (computerChoice - playerChoice == 1) {//Défaite du joueur
					$('#divResult').text('Défaite...');
					$('#borderResult').css('border','5px dashed #A00');
					computerPoint ++;
				} else {//Victoire du joueur
					$('#divResult').text('Victoire !');
					$('#borderResult').css('border','5px dashed #88F');
					playerPoint ++;
				}
			}
			//Mise à jour du score
			victoryPercent = Math.round((playerPoint / gameCounter) * 10000) / 100;
			defeatPercent = Math.round((computerPoint / gameCounter) * 10000) / 100;
			$('#score').text(playerPoint + '-' + computerPoint);
			$('#percent').text(victoryPercent + '% de victoire, ' + defeatPercent + '% de défaite.');
			if (victoryPercent > defeatPercent) {
				$('#percent').css('color','#FF0');
			} else if (victoryPercent < defeatPercent) {
				$('#percent').css('color','#844');
			} else {
				$('#percent').css('color','#888');
			}
			console.log(gameCounter);
		}
	});
});