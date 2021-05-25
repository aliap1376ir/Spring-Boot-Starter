package ir.aliap1376ir.source.springBootStarter.dao;

import ir.aliap1376ir.source.springBootStarter.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PersonDao extends JpaRepository<Person, Long> {
    Person findByUsername(String username);

    ArrayList<Person> findByUsernameContaining(String username);

    ArrayList<Person> findByOrderById();
}
