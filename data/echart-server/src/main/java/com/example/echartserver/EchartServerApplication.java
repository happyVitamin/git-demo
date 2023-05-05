package com.example.echartserver;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.**.dao")
public class EchartServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EchartServerApplication.class, args);
    }

}
