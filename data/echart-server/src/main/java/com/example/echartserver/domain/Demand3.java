package com.example.echartserver.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

@TableName(value = "demand3")
public class Demand3 {
    @TableField(value = "breed")
    private String breed;

    @TableField(value = "highopinion")
    private Double highopinion;

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
     * @return highopinion
     */
    public Double getHighopinion() {
        return highopinion;
    }

    /**
     * @param highopinion
     */
    public void setHighopinion(Double highopinion) {
        this.highopinion = highopinion;
    }
}