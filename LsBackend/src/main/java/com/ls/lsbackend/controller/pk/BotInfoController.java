package com.ls.lsbackend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pk/")
public class BotInfoController {

    /**
     * 返回对局bot信息
     *
     * @return 字符串类型的bot信息。
     */
    @RequestMapping("botinfo/")
    public String botInfo(){
        return null;
    }
}

