package net.superset.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.superset.springboot.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

}
