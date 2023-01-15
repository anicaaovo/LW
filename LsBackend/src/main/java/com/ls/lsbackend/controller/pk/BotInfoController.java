package com.ls.lsbackend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/pk/")
public class BotInfoController {

    /**
     * 返回对局bot信息
     *
     * @return 字符串类型的bot信息。
     */
    @RequestMapping("botinfo/")
    public Map<String, String> botInfo(){
        Map<String, String> bot1 = new HashMap<>();
        bot1.put("name","tiger");
        bot1.put("level","999");
        return bot1;
    }
}

