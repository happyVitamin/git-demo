package com.example.echartserver.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

@TableName(value = "demand1")
public class Demand1 {
    @TableField(value = "breed")
    private String breed;

    @TableField(value = "`count`")
    private Integer count;

    /**
     * @return breed
     */
    public String getBreed() {
        return breed;
    }

    /**
     * @param breed
     */
    public void setBreed(String breed) {
        this.breed = breed;
    }

    /**
     * @return count
     */
    public Integer getCount() {
        return count;
    }

    /**
     * @param count
     */
    public void setCount(Integer count) {
        this.count = count;
    }
}