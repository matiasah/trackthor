package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "trs_maquina")
public class Maquina implements Serializable {

	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "emp_create_at", nullable = false)
	private java.time.LocalDateTime createdAt;

	// TODO
	@ManyToOne()
	@JoinColumn(name = "empresa_id")
	private Empresa empresa;

	@OneToOne(mappedBy = "maquina")
	private TipoMaquina tipoMaquina;

	@OneToMany(mappedBy = "maquina")
	private List<Arriendo> arriendos;

	public Maquina() {
		super();
	}

	public Maquina(long id, LocalDateTime createdAt, Empresa empresa, TipoMaquina tipoMaquina,
			List<Arriendo> arriendos) {
		super();
		this.id = id;
		this.createdAt = createdAt;
		this.empresa = empresa;
		this.tipoMaquina = tipoMaquina;
		this.arriendos = arriendos;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public TipoMaquina getTipoMaquina() {
		return tipoMaquina;
	}

	public void setTipoMaquina(TipoMaquina tipoMaquina) {
		this.tipoMaquina = tipoMaquina;
	}

	public List<Arriendo> getArriendos() {
		return arriendos;
	}

	public void setArriendos(List<Arriendo> arriendos) {
		this.arriendos = arriendos;
	}

	@Override
	public String toString() {
		return "Maquina [id=" + id + ", createdAt=" + createdAt + ", empresa=" + empresa + ", tipoMaquina="
				+ tipoMaquina + ", arriendos=" + arriendos + "]";
	}

}
