	var world = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 2, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 2, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 2, 2, 2, 1, 1, 1, 0, 2, 2, 2, 0, 1, 1, 1, 2, 2, 2, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 2, 2, 1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 2, 2, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

    
		var worldDict = {
			0:'wall',
			1: 'coin',
			2: 'blank'
		}
		
		/* function placeFood(){
			for (var i = 0; i < world.length; i ++) {
				for (var j = 0; j < world[i].length; j += Math.floor(Math.random() * 10 / 6 + 1) + 1){
					if (world[i][j] == 2 ){
						world[i][j] = Math.floor(Math.random() * 10 / 4)
					}
				}
			}
			world[0][0] = 2
		} */
		
		function drawWorld(){
			output = "";
			for(var row = 0; row < world.length; row++){
				output += "<div class = 'row'>"
				for(var wall = 0; wall < world[row].length; wall++){
					output += "<div class = '" + worldDict[world[row][wall]] +"'></div>"
				}
				output += "</div>"
			}
			document.getElementById('world').innerHTML = output;
		}
        
        var leftValue = 30, topValue = 30, direction = 0; xSteps = 1; ySteps = 1;
        
        function positionPacman(){
            if(isWall(direction)){
                direction = 0;
            }
            else{
                if(direction == 37){
                    leftValue -= 5;
                }
                else if(direction == 39){
                    leftValue += 5;
                }
                else if(direction == 40){
                    topValue += 5;
                }
                else if(direction == 38){
                    topValue -= 5;
                }
            }
        }
        function stepsCount(){
            if (leftValue%30 == 0 && direction == 39){
                xSteps++;
            }
            if (leftValue%30 == 0 && direction == 37){
                xSteps--;
            }
            if (topValue%30 == 0 && direction == 40){
                ySteps++;
            }
            if (topValue%30 == 0 && direction == 38){
                ySteps--;
            }
        }
        function isWall(key){
                if ((key == 37 && leftValue % 30 == 0 && world[Math.floor(topValue/30)][leftValue/30-1] == 0) ||
                    (key == 39 && leftValue % 30 == 0 && world[Math.floor(topValue/30)][leftValue/30+1] == 0) ||
                    (key == 40 && topValue % 30 == 0 && world[topValue/30+1][Math.floor(leftValue/30)] == 0) ||
                    (key == 38 && topValue % 30 == 0 && world[topValue/30-1][Math.floor(leftValue/30)] == 0)){
                        return true;
                    
        }
            return false
        }
        function move(){
            document.getElementById('pacman').style.left = leftValue+"px";
            document.getElementById('pacman').style.top = topValue+"px";
        }
        function eat(){
            if(topValue % 30 == 0 && leftValue % 30 == 0){
                if(world[topValue/30][leftValue/30] == 1){     	
                    world[topValue/30][leftValue/30] = 2;
                }
        	}
        }
        document.onkeydown = function(e){
            if (!isWall(e.keyCode) && topValue % 30 ==0 && leftValue % 30 == 0){
                direction = e.keyCode;
            }
            else if ((direction == 37 && e.keyCode == 39) ||
                (direction == 39 && e.keyCode == 37) ||
                (direction == 40 && e.keyCode == 38) ||
                (direction == 38 && e.keyCode == 40)){
                direction = e.keyCode;
            }
        }
        
		var x = 270, y = 300, ninjaAlive = true
		function positionGhosts(){
            for (var i = 1; i < 5; i++){
                document.getElementById('ghost'+i).style.left = x+"px";
                document.getElementById('ghost'+i).style.top = y+"px";
                document.getElementById('ghost'+i).style.backgroundImage = "url('img/ghost"+i+".gif')";
            }
        }
        function moveGhosts(){
            for (var i = 1; i < 5; i++){
                document.getElementById('ghost'+i).style.left = x+"px";
                document.getElementById('ghost'+i).style.top = y+"px";
            }
        }
        function gameLoop(){
            drawWorld();
            move();
            positionGhosts();
            setTimeout(gameLoop, 100);
        }
        function pacmanLoop(){
            drawWorld();
            positionPacman();
            eat();
            move();
            setTimeout(pacmanLoop, 80);
        }
        //gameLoop();
        pacmanLoop();
        /* function chasingGhost(){
		 		if (leftValue > x) {
		 			x += 40
		 			positionGhost()
		 		}
		 		else if (leftValue < x) {
		 			x -= 40
		 			positionGhost()
		 		}
		 		if (topValue > y){
		 			y += 40
		 			positionGhost()
		 		}
		 		else if (topValue < y) {
		 			y -= 40
		 			positionGhost()
		 		}
		 		if (leftValue == x && topValue == y){
		 			ninjaAlive = false
		 		}
		} */