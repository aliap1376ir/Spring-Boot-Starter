package ir.aliap1376ir.source.springBootStarter.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StarterController {

    private Logger logger = LoggerFactory.getLogger(StarterController.class);

    @GetMapping(path = "/")
    private String hello() {
        return "Hello World!";
    }

    @GetMapping(path = "/start")
    private String helloThere() {
        return "Hello There!";
    }

    @GetMapping(path = "/hello/{personName}")
    private String helloPersonNamePathVariable(@PathVariable("personName") String name) {
        logger.info(name);
        return "Hello " + name;
    }

    @GetMapping(path = "/hello")
    private String helloPersonNameGetParameter(@RequestParam("personName") String name) {
        logger.info(name);
        logger.debug(name);
        logger.warn(name);
        if (name.isEmpty()) {
            logger.error("name is empty");
        }
        return "Hello " + name;
    }

    @GetMapping(path = "/helloV2/{personName}/{age}")
    private String helloPersonNameAndAgePathVariable(@PathVariable("personName") String name, @PathVariable("age") int age) {
        logger.info(name);
        return "Hello " + name + " you are " + age + " year old";
    }

    @GetMapping(path = "/helloV2")
    private String helloPersonNameAndAgeGetParameter(@RequestParam("personName") String name, @RequestParam() int age2) {
        logger.info(name);
        logger.debug(name);
        logger.warn(name);
        if (name.isEmpty()) {
            logger.error("name is empty");
        }
        return "Hello " + name + " you are " + age2 + " year old";
    }
}
