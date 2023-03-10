package com.ls.lsbackend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ls.lsbackend.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
