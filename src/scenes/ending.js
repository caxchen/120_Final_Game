class Ending extends Phaser.Scene {
    constructor() {
        super('ending');
    }

    create() {
        this.MAX_VELOCITY = 300;
        this.physics.world.gravity.y = 2000;

        
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //this.background = this.add.tileSprite(0,0, 960, 720, 'background').setOrigin(0, 0);
        //this.mist = this.add.tileSprite(0, 0, 960, 720, 'mist').setOrigin(0, 0);


        //

        
        this.whiteRect = this.add.rectangle(0, 0, 960, 720, 0xFFFFFF).setOrigin(0, 0);
        this.blackRect = this.add.rectangle(0, 0, 960, 720, 0x000000).setOrigin(0, 0);
        this.hugh = new Player(this, 88, 445, 'hugh', 0).setOrigin(0,0);

        this.leftWallBound = this.physics.add.sprite(900, game.config.height/2, 'wall');
        this.leftWallBound.body.immovable = true;
        this.leftWallBound.body.allowGravity = false;
        this.physics.add.collider(this.hugh, this.leftWallBound);
        this.leftWallBound.alpha = 0;
        
        //this.shrine = this.add.sprite(460, 500, 'shrine').setOrigin(0, 0);
        //this.shrine.setScale(1.2);

        this.testPlatform = this.physics.add.sprite(game.config.width/2, 640, 'floor');
        this.testPlatform.body.immovable = true;
        this.testPlatform.body.allowGravity = false;
        this.physics.add.collider(this.hugh, this.testPlatform);

        this.frontGround = this.add.sprite(game.config.width/2, 610, 'floor');
        this.bottomGround = this.add.sprite(game.config.width/2, 730, 'floor');

        
        this.cat = this.add.sprite(100, 20, 'harold').setOrigin(0,0);
        this.cat.alpha = 0;

        this.frameTime = 0;
    }

    update(time, delta) {
        this.frameTime += delta;
        if (this.frameTime > 16.5) {
            this.frameTime = 0;

            
            this.hugh.update();

            if(this.hugh.x >= 650){
                console.log("ending trigger");
                this.hugh.body.setVelocity(0);
                this.input.keyboard.enabled = false;
                this.hugh.anims.play('idle');
            }

        }
    }
}