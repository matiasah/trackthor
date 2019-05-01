package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="trs_plan")
public class Plan implements Serializable{
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    // TODO
    @OneToOne
    private Contrato contrato;
    
    @Column(name = "pla_nombre", nullable = false, length = 100)
    private String nombre;
    
    @Column(name = "pla_fecha", nullable = false)
    private String descripcion;
    
    @Column(name = "pla_costo", nullable = false)
    private long costo;
    
    @Column(name = "pla_create_at", nullable = false)
    private java.time.LocalDateTime createAt;

	public Plan() {
	
	}

	public Plan(long id, Contrato contrato, String nombre, String descripcion, long costo, LocalDateTime createAt) {
		super();
		this.id = id;
		this.contrato = contrato;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.costo = costo;
		this.createAt = createAt;
	}



	public Contrato getContrato() {
		return contrato;
	}

	public void setContrato(Contrato contrato) {
		this.contrato = contrato;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public long getCosto() {
		return costo;
	}

	public void setCosto(long costo) {
		this.costo = costo;
	}

	public LocalDateTime getCreateAt() {
		return createAt;
	}

	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}

	@Override
	public String toString() {
		return "Plan [id=" + id + ", contrato=" + contrato + ", nombre=" + nombre + ", descripcion=" + descripcion
				+ ", costo=" + costo + ", createAt=" + createAt + "]";
	}
    
    
    
    
    


}
