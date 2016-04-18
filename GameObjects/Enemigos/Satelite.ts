/**
 * Created by 46465442z on 18/04/16.
 */
module MyGame {

    export class Satelite extends Enemigo {

        // Games
        game:SimpleGame;

        // Constructor de los enemigos
        constructor(game:SimpleGame, key:string|Phaser.RenderTexture|Phaser.BitmapData|PIXI.Texture, x:number, y:number) {
            super(game, x, y, key, 0);

            // Ajustmaos el sprite
            this.game = game;
            this.game.physics.enable(this);
            this.body.enableBody = true;
            this.body.collideWorldBounds = true;

            // Rebote
            this.body.velocity.x = 400;
            this.body.bounce.setTo(1);

            this.game.sonidoPlatillo.loop = true;
            this.game.sonidoPlatillo.play();

        }
    }
}