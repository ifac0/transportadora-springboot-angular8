package com.springboot2.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.Valid;

@Entity
@Table(name = "transportadora")
public class Transportadora {
	 	
	 private long id;
	 
	 private String nome;
	 private String email;
	 private String empresa;
	 private String telefone;
	 private String celular;
	 private String modal;
	 private String rua;
	 private int numero;
	 private String bairro;
	 private String cidade;
	 private String uf;
	 private String cep;
	 
	 public Transportadora() {
		 
	 }
	 
	 public Transportadora(long id,         
			 String nome,     
			 String email,    
			 String empresa,  
			 String telefone,  
			 String celular,    
			 String modal,    
			 String rua,    
			 int numero,      
			 String bairro,   
			 String cidade,   
			 String uf,
			 String cep) {
		 
		 this.nome = nome;
		 this.email = email;
		 this.empresa = empresa;
		 this.telefone = telefone;
		 this.celular = celular;
		 this.modal = modal;
		 this.rua = rua;
		 this.numero = numero;
		 this.bairro = bairro;
		 this.cidade = cidade;
		 this.uf = uf;
		 this.cep = cep;
		 
		 
	 }

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "nome")
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	@Column(name = "email", nullable = false )
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name = "empresa", nullable = false)
	public String getEmpresa() {
		return empresa;
	}

	public void setEmpresa(String empresa) {
		this.empresa = empresa;
	}
	
	@Column(name = "telefone")
	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	@Column(name = "celular")
	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	@Column(name = "modal")
	public String getModal() {
		return modal;
	}

	public void setModal(String modal) {
		this.modal = modal;
	}

	@Column(name = "rua")
	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	@Column(name = "numero")
	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	@Column(name = "bairro")
	
	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	@Column(name = "cidade")
	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	@Column(name = "uf")
	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}
	
	@Column(name = "cep")
	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}
	
	@Override
	public String toString() {
		return "Transportadora [id=" + id + ", nome=" + nome + "]";
	}
	 
}
