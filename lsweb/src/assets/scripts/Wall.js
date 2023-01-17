import {LwGameObject} from "@/assets/scripts/LwGameObject";

export class Wall extends LwGameObject() {
    constructor(row, col, game_map) {
        super();
        this.row = row;
        this.col = col;
        this.game_map = game_map;
    }

    update(){
        this.render();
    }

    render(){
        const L = this.game_map.L;
        const ctx = this.game_map.ctx;
        ctx.fillStyle = "#cd516f";
        ctx.fillRect(this.col * L, this.row * L, L, L);
    }
}