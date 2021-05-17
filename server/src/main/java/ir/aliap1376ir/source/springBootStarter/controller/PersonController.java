package ir.aliap1376ir.source.springBootStarter.controller;

import ir.aliap1376ir.source.springBootStarter.dao.PersonDao;
import ir.aliap1376ir.source.springBootStarter.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://192.168.1.40:4200", "http://192.168.1.27:4200", "http://127.0.0.1:4200"})
public class PersonController {

    @Autowired
    private PersonDao personDao;

    @GetMapping(path = "/api/person/test")
    private String test() {

        Person person = new Person();
        person.setName("John");
        person.setUsername("john123");

        Person personDb = personDao.save(person);

        return personDb.getId() + "";
    }

    @PostMapping(path = "/api/person/new")
    private Person newPerson(@RequestBody Person person) {
        return personDao.save(person);
    }

    @GetMapping(path = "/api/person/all")
    private List<Person> allPeople() {
        return personDao.findAll();
    }

}
