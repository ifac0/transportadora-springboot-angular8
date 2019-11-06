package com.springboot2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot2.model.Transportadora;

@Repository
public interface TransportadoraRepository extends JpaRepository<Transportadora, Long>{
	
	@Query("SELECT c.bairro, count(*) FROM Transportadora c Group By c.bairro ")
	List<Object[]> findAllBairros();
	
	@Query("SELECT c.cidade, count(*) FROM Transportadora c Group By c.cidade ")
	List<Object[]> findAllLocalizacao();
	
	@Query("SELECT c.modal, count(*) FROM Transportadora c Group By c.modal ")
	List<Object[]> findAllLModal();
}
