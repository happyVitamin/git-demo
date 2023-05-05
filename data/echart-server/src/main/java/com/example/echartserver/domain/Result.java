package com.example.echartserver.domain;

import com.baomidou.mybatisplus.extension.api.R;

public class Result<T> {
    private String code = "200";

    private String message = "response success！";

    private T data;

    public Result() {
    }

    public Result(T data) {
        this.data = data;
    }

    public static <T> Result<T>  ok(T data) {
        return new Result<>(data);
    }




    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
