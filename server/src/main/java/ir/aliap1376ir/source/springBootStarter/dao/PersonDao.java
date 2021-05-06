package ir.aliap1376ir.source.springBootStarter.dao;

import ir.aliap1376ir.source.springBootStarter.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonDao extends JpaRepository<Person, Long> {

}
