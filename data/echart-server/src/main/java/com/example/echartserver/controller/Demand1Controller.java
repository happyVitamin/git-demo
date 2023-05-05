package com.example.echartserver.controller;

import com.example.echartserver.domain.*;
import com.example.echartserver.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class Demand1Controller {
    @Autowired
    private Demand1Service demand1Service;
    @Autowired
    private Demand3Service demand3Service;
    @Autowired
    private Demand4Service demand4Service;
    @Autowired
    private Demand5Service demand5Service;
    @Autowired
    private Demand6Service demand6Service;

    /**
     * demand1
     */
    @GetMapping("demand1List")
    public Result<List<Demand1>> demand1List() {
        return Result.ok(demand1Service.list(null));
    }

    /**
     * demand3
     */
    @GetMapping("demand3List")
    public Result<List<Demand3>> demand3List() {
        return Result.ok(demand3Service.list(null));
    }

    /**
     * demand4
     */
    @GetMapping("demand4List")
    public Result<List<Demand4>> demand4List() {
        return Result.ok(demand4Service.list(null));
    }

    /**
     * demand5
     */
    @GetMapping("demand5List")
    public Result<List<Demand5>> demand5List() {
        List<Demand5> list = demand5Service.list(null);
        list.stream().forEach(v -> {
            String rate = v.getRate().substring(0, 4);
            BigDecimal bigDecimal = new BigDecimal(rate);
            bigDecimal = bigDecimal.multiply(BigDecimal.valueOf(100));
            v.setRate(bigDecimal.toPlainString());
        });
        return Result.ok(list);
    }

    /**
     * demand6
     */
    @GetMapping("demand6List")
    public Result<List<Demand6>> demand6List() {
        return Result.ok(demand6Service.list(null));
    }

}
