package com.ls.lsbackend.service.impl;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ls.lsbackend.mapper.UserMapper;
import com.ls.lsbackend.pojo.User;
import com.ls.lsbackend.service.impl.utils.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.management.Query;
import java.sql.Wrapper;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;

    /**
     * Springboot 自带的加密登录
     * @param username 登陆界面的username
     * @return  一个UserDetail 这里通过工具类实现了UserDetail接口
     * @throws UsernameNotFoundException 用户名不存在，报异常。
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", username);
        User user = userMapper.selectOne(queryWrapper);
        if (user == null){
            throw new RuntimeException("用户不存在");
        } else {
            return new UserDetailsImpl(user);
        }
    }
}
