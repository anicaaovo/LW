package com.ls.lsbackend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pk/")
public class BotInfoController {

    @RequestMapping("botinfo/")
    public String botInfo(){
        return "aaa";
    }
}
