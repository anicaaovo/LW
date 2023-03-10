package com.ls.lsbackend.controller.user;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ls.lsbackend.mapper.UserMapper;
import com.ls.lsbackend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserMapper userMapper;

    /**
     * 查找所有用户
     * @return
     */
    @GetMapping("/user/all")
    public List<User> getUsers(){
        return userMapper.selectList(null);
    }

    /**
     * 通过主键查找用户
     * @param userId
     * @return
     */
    @GetMapping("/user/{userId}")
    public User getUserById(@PathVariable int userId){
        /*return userMapper.selectById(userId);*/
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("id", userId);
        return userMapper.selectOne(queryWrapper);
    }

    /**
     * 查找主键大于2的用户
     * @return
     */
    @GetMapping("/user/greater than 2")
    public List<User> getSecondThirdUser(){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.ge("id", 2);
        return userMapper.selectList(queryWrapper);
    }

    /**
     *
     * 添加一个用户
     * @param userId
     * @param username
     * @param password
     * @return
     */
    @GetMapping("/user/insert/{userId}/{username}/{password}")
    public String addUser(@PathVariable int userId, @PathVariable String username, @PathVariable String password){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(password);
        User user = new User(userId, username, encodedPassword);
        userMapper.insert(user);
        return "successfully added";
    }

    /**
     * 通过主键删除用户
     * @param userId
     * @return
     */
    @GetMapping("/user/delete/{userId}")
    public String deleteUser(@PathVariable int userId){
        userMapper.deleteById(userId);
        return "Successfully deleted";
    }
}
