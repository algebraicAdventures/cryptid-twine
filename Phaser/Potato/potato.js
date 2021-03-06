/**
 * Created by Algebraic on 9/9/2018.
 */
window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload () {

        game.load.image('potato', '/images/potato.png');
        game.load.image('potato_sprout', '/images/potato_sprouted.png');
        game.load.image('arm', '/images/mothman_arm.png');

    }

    var arm;

    function create () {

        game.world.setBounds(0, 0, 800, 600);
        game.stage.backgroundColor = Phaser.Color.WHITE;

        potato = game.add.sprite(game.world.centerX + 3, game.world.centerY + 26, 'potato');
        potato.anchor.setTo(.5, .5);
        potato.scale.setTo(.5, .5)

        sprout = game.add.sprite(game.world.centerX, game.world.centerY, 'potato_sprout');
        sprout.anchor.setTo(.5, .5);
        sprout.scale.setTo(.5, .5);

        sprout.alpha = 0;

        arm = game.add.sprite(game.world.centerX + 250, game.world.centerY, 'arm');
        arm.anchor.setTo(.5, .5);
        arm.scale.setTo(.5, .5);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(arm);

    }


    function update () {
        game.camera.follow();
        if(game.input.mousePointer.isDown){
            game.physics.arcade.moveToPointer(arm, 400);
        } else {
            arm.body.velocity.setTo(0, 0);
        }

        if (Phaser.Rectangle.contains(arm.body, game.world.centerX, game.world.centerY))
        {
            if(sprout.alpha <= 1){
                sprout.alpha += .01;
            }
        } else {
            if (sprout.alpha > 0){
                sprout.alpha -= .01;
            }
        }
    }

};