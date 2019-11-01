package com.springboot2.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot2.exception.ResourceNotFoundException;
import com.springboot2.model.Transportadora;
import com.springboot2.repository.TransportadoraRepository;

@RestController @CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/v1")
public class TransportadoraController {
	
	@Autowired
	private TransportadoraRepository transportadoraRepository;
	
	@GetMapping("/transportadoras")
	public java.util.List<Transportadora> getAllTransportadoras(){
		return transportadoraRepository.findAll();
	}
	
	@GetMapping("/transportadoras/{id}")
	public ResponseEntity<Transportadora> getTransportadoraById(@PathVariable(value="id") Long transportadoraId)
		throws ResourceNotFoundException {
		Transportadora transportadora = transportadoraRepository.findById(transportadoraId)
				.orElseThrow(() -> new ResourceNotFoundException ("Transportadora não encontrado!"));
		return ResponseEntity.ok().body(transportadora);
	}
	
	@PostMapping("/transportadoras")
	public Transportadora createTransportadora (@Valid @RequestBody Transportadora transportadora) {
		return transportadoraRepository.save(transportadora);
	}
	
	@PutMapping("/transportadoras/{id}")
    public ResponseEntity<Transportadora> updateTransportadora(@PathVariable(value = "id") Long transportadoraId,
         @Valid @RequestBody Transportadora transportadoraDetalhes) throws ResourceNotFoundException {
        Transportadora transportadora = transportadoraRepository.findById(transportadoraId)
        .orElseThrow(() -> new ResourceNotFoundException("Transportadora não encontrada, id :: " + transportadoraId));

        transportadora.setEmail(transportadoraDetalhes.getEmail());
        transportadora.setNome(transportadoraDetalhes.getNome());
        transportadora.setEmpresa(transportadoraDetalhes.getEmpresa());
        transportadora.setTelefone(transportadoraDetalhes.getTelefone());
        transportadora.setCelular(transportadoraDetalhes.getCelular());
        transportadora.setModal(transportadoraDetalhes.getModal());
        transportadora.setRua(transportadoraDetalhes.getRua());
        transportadora.setNumero(transportadoraDetalhes.getNumero());
        transportadora.setBairro(transportadoraDetalhes.getBairro());
        transportadora.setCidade(transportadoraDetalhes.getCidade());
        transportadora.setUf(transportadoraDetalhes.getUf());
               
        final Transportadora updatedTransportadora = transportadoraRepository.save(transportadora);
        return ResponseEntity.ok(updatedTransportadora);
    }
	
	@DeleteMapping("/transportadoras/{id}")
    public Map<String, Boolean> deleteTransportadora(@PathVariable(value = "id") Long transportadoraId)
         throws ResourceNotFoundException {
        Transportadora transportadora = transportadoraRepository.findById(transportadoraId)
        		.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + transportadoraId));

        transportadoraRepository.delete(transportadora);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
