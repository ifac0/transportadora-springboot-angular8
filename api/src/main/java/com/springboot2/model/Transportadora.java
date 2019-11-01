package com.springboot2.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transportadora")
public class Transportadora {

	 private long id;
	 private String nome;
	 private String email;
	 private String empresa;
	 private int telefone;
	 private int celular;
	 private String modal;
	 private String rua;
	 private int numero;
	 private String bairro;
	 private String cidade;
	 private String uf;
	 
	 public Transportadora() {
		 
	 }
	 
	 public Transportadora(long id,         
			 String nome,     
			 String email,    
			 String empresa,  
			 int telefone,  
			 int celular,    
			 String modal,    
			 String rua,    
			 int numero,      
			 String bairro,   
			 String cidade,   
			 String uf) {
		 
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
		 
		 
	 }

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "nome", nullable = false)
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
	
	@Column(name = "telefone", nullable = false)
	public int getTelefone() {
		return telefone;
	}

	public void setTelefone(int telefone) {
		this.telefone = telefone;
	}

	@Column(name = "celular", nullable = false)
	public int getCelular() {
		return celular;
	}

	public void setCelular(int celular) {
		this.celular = celular;
	}

	@Column(name = "modal", nullable = false)
	public String getModal() {
		return modal;
	}

	public void setModal(String modal) {
		this.modal = modal;
	}

	@Column(name = "rua", nullable = false)
	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	@Column(name = "numero", nullable = false)
	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	@Column(name = "bairro", nullable = false)
	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	@Column(name = "cidade", nullable = false)
	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	@Column(name = "uf", nullable = false)
	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}
	
	@Override
	public String toString() {
		return "Transportadora [id=" + id + ", nome=" + nome + "]";
	}
	 
}
