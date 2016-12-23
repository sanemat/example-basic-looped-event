/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.counter = 0;
    this.text = 0;
  }
  preload () {}

  create () {
    this.game.stage.backgroundColor = '#6688ee';

    this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    this.text.anchor.setTo(0.5, 0.5);

    //  Here we'll create a basic looped event.
    //  A looped event is like a repeat event but with no limit, it will literally repeat itself forever, or until you stop it.

    //  The first parameter is how long to wait before the event fires. In this case 1 second (you could pass in 1000 as the value as well.)
    //  The next two parameters are the function to call ('updateCounter') and the context under which that will happen.

    this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
  }

  updateCounter () {
    this.counter++;
    this.text.setText('Counter: ' + this.counter);
  }

  render () {
    if (__DEV__) {
      this.game.debug.text("Time until event: " + this.game.time.events.duration.toFixed(0), 32, 32);
      this.game.debug.text("Next tick: " + this.game.time.events.next.toFixed(0), 32, 64);
    }
  }
}
