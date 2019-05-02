package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="trs_alerta")
public class Alerta implements Serializable{
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "ale_descripcion", nullable = false)
    private String descripcion;
    
    @Column(name = "ale_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
    
    //TODO
    @ManyToOne()
    @JoinColumn(name = "empresa_id")
    private Empresa empresa;
    
    @ManyToOne()
    @JoinColumn(name = "uchofer_id")
    private UsuarioChofer uchofer;

    
    
    
	public Alerta() {
		super();
	}




	public Alerta(long id, String descripcion, LocalDateTime createdAt, Empresa empresa, UsuarioChofer uchofer) {
		super();
		this.id = id;
		this.descripcion = descripcion;
		this.createdAt = createdAt;
		this.empresa = empresa;
		this.uchofer = uchofer;
	}




	public long getId() {
		return id;
	}




	public void setId(long id) {
		this.id = id;
	}




	public String getDescripcion() {
		return descripcion;
	}




	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}




	public java.time.LocalDateTime getCreatedAt() {
		return createdAt;
	}




	public void setCreatedAt(java.time.LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}




	public Empresa getEmpresa() {
		return empresa;
	}




	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}




	public UsuarioChofer getUchofer() {
		return uchofer;
	}




	public void setUchofer(UsuarioChofer uchofer) {
		this.uchofer = uchofer;
	}




	@Override
	public String toString() {
		return "Alerta [id=" + id + ", descripcion=" + descripcion + ", createdAt=" + createdAt + ", empresa=" + empresa
				+ ", uchofer=" + uchofer + "]";
	}
    
    
    
    
    
    
    

}
