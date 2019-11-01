package com.springboot2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;import com.springboot2.model.Transportadora;

@Repository
public interface TransportadoraRepository extends JpaRepository<Transportadora, Long>{

}
