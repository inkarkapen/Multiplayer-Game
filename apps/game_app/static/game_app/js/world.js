class world{
    constructor(world_map){
        this.player1 = '<img src = "/static/game_app/img/pacman1.gif">';
        this.player2 = '<img src = "/static/game_app/img/pacman.gif">';
        this.world_map = world_map;
        this.player = {
            'row': 3,
            'col': 3,
        }
        this.player2Pos = {}
        
    }
    drawWorld(){
        var output = "";
        var worldDict = {
			0:'wall',
			1: 'coin',
			2: 'blank'
        }
        console.log(this.world_map);
        //console.log(worldDict);
        this.world_map[this.player['row']][this.player['col']] = 8;
        for(var row = 0; row < this.world_map.length; row++){
            output += "<div class = 'row'>"
            for(var wall = 0; wall < this.world_map[row].length; wall++){
                if(this.world_map[row][wall] == 8){ output += this.player1;}
                else if(this.world_map[row][wall] == 9){ output += this.player2;}
                //if(this.world_map[row][wall] == 0 || this.world_map[row][wall] == 1 || this.world_map[row][wall] == 2){output += "<div class = '" + worldDict[this.world_map[row][wall]] +"'></div>"}
                else{output += "<div class = '" + worldDict[this.world_map[row][wall]] +"'></div>";}
            }
            output += "</div>"
        }
        $('#world').html(output)
        //document.getElementById('world').innerHTML = output;
    }
    posPlayer2(update){
        console.log(this.world_map)
        console.log("update is " + update.toString())
        console.log(this.player2Pos)
        if(this.player2Pos['row'] != undefined){
            this.world_map[this.player2Pos['row']][this.player2Pos['col']] = 2
        }
        this.player2Pos = update;
        this.world_map[this.player2Pos['row']][this.player2Pos['col']] = 9
        this.drawWorld()
    }
}