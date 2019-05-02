package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "trs_plan")
public class Plan implements Serializable {

	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	// TODO
	@OneToMany(mappedBy = "plan")
	private List<Contrato> contratos;

	@Column(name = "pla_nombre", nullable = false, length = 100)
	private String nombre;

	@Column(name = "pla_fecha", nullable = false)
	private String descripcion;

	@Column(name = "pla_costo", nullable = false)
	private long costo;

	@Column(name = "pla_created_at", nullable = false)
	private java.time.LocalDateTime createdAt;

	public Plan() {

	}

	public Plan(long id, List<Contrato> contratos, String nombre, String descripcion, long costo,
			LocalDateTime createdAt) {
		super();
		this.id = id;
		this.contratos = contratos;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.costo = costo;
		this.createdAt = createdAt;
	}

	public List<Contrato> getContratos() {
		return contratos;
	}

	public void setContrato(List<Contrato> contratos) {
		this.contratos = contratos;
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

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	@Override
	public String toString() {
		return "Plan [id=" + id + ", contratos=" + contratos + ", nombre=" + nombre + ", descripcion=" + descripcion
				+ ", costo=" + costo + ", createdAt=" + createdAt + "]";
	}

}
