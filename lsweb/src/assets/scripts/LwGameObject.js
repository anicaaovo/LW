const LW_GAME_OBJECTS = [];

export class LwGameObject {
    constructor() {
        LW_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = 0;
    }
    start() {  //只执行一次

    }

    update() {  // 每一帧执行一次

    }

    on_destory() { //删除 前 调用

    }
    destory() {  // 删除对象
        this.on_destory();
        for (let i in LW_GAME_OBJECTS) {
            const obj = LW_GAME_OBJECTS[i];
            if (obj === this) {
                LW_GAME_OBJECTS.splice(i);
            }
        }
    }
}

let last_timeStamp;
const step = timestamp => {
    for (let obj of LW_GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timeStamp;
            obj.update();
        }
    }
    last_timeStamp = timestamp;
    requestAnimationFrame(step)
}

requestAnimationFrame(step)