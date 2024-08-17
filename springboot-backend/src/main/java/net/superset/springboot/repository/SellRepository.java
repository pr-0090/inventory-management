package net.superset.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.superset.springboot.model.Sell;

@Repository
public interface SellRepository extends JpaRepository<Sell, Long>{

}
