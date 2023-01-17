import {LwGameObject} from "@/assets/scripts/LwGameObject";
import {Wall} from "@/assets/scripts/Wall";

export class GameMap extends LwGameObject {
    constructor (ctx, parent) {
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;

        this.rows = 13;
        this.cols = 13;
        this.walls = [];
        this.num_of_walls = parseInt(Math.random() * 80);
    }

    start() {
        for (let i = 0; i < 1000; i++) {
            if (this.create_walls()) {
                break;
            }
        }
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
        const color_even = "#6a5a9c";
        const color_odd = "#e6c2fd";
        for (let r = 0; r < this.rows; r++){
            for (let c = 0; c < this.cols; c++){
                if ((r + c) % 2 === 0) {
                    this.ctx.fillStyle = color_even;
                } else {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
            }
        }
    }

    create_walls() {
        const g = [];
        for (let r = 0; r < this.rows; r ++){
            g[r] = [];
            for (let c = 0; c < this.cols; c++){
                g[r][c] = false;
            }
        }

        for (let r = 0; r < this.rows; r++) {
            g[r][0] = true;
            g[r][this.cols - 1] = true;
        }

        for (let c = 0; c < this.cols; c++) {
            g[0][c] = true;
            g[this.rows - 1][c] = true;
        }

        let cnt = this.num_of_walls / 2 ;
        while (cnt > 0) {
            let r = parseInt(Math.random() * this.rows);
            let c = parseInt(Math.random() * this.cols);
            if ((g[r][c] === true || g[c][r] === true) || (r === this.rows - 2  && c === 1) || (r === 1 && c === this.cols - 2)){
                continue;
            } else {
                g[r][c] = true;
                g[c][r] = true;
                cnt--;
            }
        }
        const copy_g = JSON.parse(JSON.stringify(g));
        if (!this.check_connectivity(copy_g,this.rows - 2, 1,1,this.cols - 2))
            return false;
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (g[r][c] === true){
                    this.walls.push(new Wall(r, c, this));
                }
            }
        }
        return true;
    }

    check_connectivity(g, sx, sy, tx, ty){
        if (sx == tx && sy == ty) return true;
        g[sx][sy] = true;
        let dx = [-1,0,1,0], dy =[0,1,0,-1];
        for (let i = 0; i < 4; i++) {
            let x =  sx + dx[i], y = sy + dy[i];
            if (!g[x][y] && this.check_connectivity(g,x,y,tx,ty))
                return true;
        }
        return false;
    }
}
