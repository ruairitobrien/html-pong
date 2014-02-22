ig.module( 'game.levels.android3' )
.requires('impact.image','game.entities.paddle-player','game.entities.paddle-cpu','game.entities.puck')
.defines(function(){
LevelAndroid3=/*JSON[*/{"entities":[{"type":"EntityPaddlePlayer","x":136,"y":396},{"type":"EntityPaddleCpu","x":136,"y":24},{"type":"EntityPuck","x":164,"y":200}],"layer":[{"name":"background","width":10,"height":14,"linkWithCollision":false,"visible":1,"tilesetName":"media/tileset2.png","repeat":false,"preRender":true,"distance":"1","tilesize":32,"foreground":false,"data":[[2,1,1,1,1,1,1,1,1,2],[2,3,3,3,3,3,3,3,3,2],[2,3,3,4,3,3,3,3,3,2],[2,3,3,3,3,3,3,4,3,2],[2,3,3,3,3,3,3,3,3,2],[2,3,3,3,3,4,3,3,3,2],[2,3,3,3,3,3,3,3,3,2],[2,3,4,3,3,3,3,3,3,2],[2,3,3,3,3,3,3,3,3,2],[2,3,3,3,3,3,3,4,3,2],[2,3,3,3,3,3,3,3,3,2],[2,3,3,3,3,3,3,3,3,2],[2,3,3,3,3,3,3,3,3,2],[2,1,1,1,1,1,1,1,1,2]]},{"name":"collision","width":10,"height":14,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[34,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,45],[34,0,0,1,0,0,0,0,0,45],[34,0,0,0,0,0,0,1,0,45],[34,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,1,0,0,0,45],[34,0,0,0,0,0,0,0,0,45],[34,0,1,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,1,0,45],[34,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,45]]}]}/*]JSON*/;
LevelAndroid3Resources=[new ig.Image('media/tileset2.png')];
});