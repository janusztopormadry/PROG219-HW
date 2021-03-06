//rain drop
Crafty.c('Drop',{
    init:function(){
        this.requires('2D, Canvas, Color, Gravity, Collision')
        .color('#000080')
        .gravity()
        .gravityConst(0.2);
    }
});

//this is supposed to load the sprite

Crafty.sprite("romansprites.png",{spr_drop:[0,0, 20, 30]});




//player
Crafty.c('Player', {
    init: function() {
        this.requires('2D,Canvas,Twoway,Gravity,Collision,Canvas, spr_drop')//this calls the sprite
        .twoway(10)
        //.attr({w: 30, h: 30})//is this needed for the sprite to work?
        //.color('#FD1C03')
        .gravity('Floor')
        .gravityConst(25)
        .stopOnScreenSide();
    },
    // Registers a stop-movement function to be called when
    // this entity hits an entity with the "Solid" component
    stopOnScreenSide: function() {
        this.onHit('ScreenSide', this.stopMovement);
        return this;
    },
    // Stops the movement
    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
        this.x -= this._movement.x;
        }
    }
});

//screenside
Crafty.c('ScreenSide',{
    init:function(){
        this.requires('2D,Canvas,Collision,Canvas, Color,solid')
        .attr({w:10,h:screenHeight})
        .color('#000');
    }
});
//Floor
Crafty.c('Floor',{
    init:function(){
        this.requires('2D, Canvas, Solid, Color')
        .attr({w: screenWidth, h: 20})
        .color('#9D00FF');
    }
});
