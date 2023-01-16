import {LwGameObject} from "@/assets/scripts/LwGameObject";


export class GameMap extends LwGameObject {
    constructor (ctx, parent) {
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;

        this.rows = 13;
        this.cols = 13;
    }

    start() {

    }

    update_size() {
        this.L = Math.min((this.parent.clientWidth / this.cols),(this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }

    update() {
        this.update_size();
        this.render();
    }

    render() { //渲染
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0 , 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

}
