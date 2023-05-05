package com.example.echartserver.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

@TableName(value = "demand5")
public class Demand5 {
    @TableField(value = "breed")
    private String breed;

    @TableField(value = "rate")
    private String rate;

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
     * @return rate
     */
    public String getRate() {
        return rate;
    }

    /**
     * @param rate
     */
    public void setRate(String rate) {
        this.rate = rate;
    }
}