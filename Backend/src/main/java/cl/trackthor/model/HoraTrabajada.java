package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Time;
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
@Table(name = "trs_hora_trabajada")
public class HoraTrabajada implements Serializable {

	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "hrt_rut", nullable = false)
	private String rut;

	@Column(name = "hrt_create_at", nullable = false)
	private java.time.LocalDateTime createdAt;

	// TODO
	@ManyToOne()
	@JoinColumn(name = "arriendo_id")
	private Arriendo arriendo;

	@ManyToOne()
	@JoinColumn(name = "uchofer_id")
	private UsuarioChofer uchofer;

	public HoraTrabajada() {
		super();
	}

	public HoraTrabajada(long id, String rut, LocalDateTime createdAt, Arriendo arriendo, UsuarioChofer uchofer) {
		super();
		this.id = id;
		this.rut = rut;
		this.createdAt = createdAt;
		this.arriendo = arriendo;
		this.uchofer = uchofer;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRut() {
		return rut;
	}

	public void setRut(String rut) {
		this.rut = rut;
	}

	public java.time.LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(java.time.LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public Arriendo getArriendo() {
		return arriendo;
	}

	public void setArriendo(Arriendo arriendo) {
		this.arriendo = arriendo;
	}

	public UsuarioChofer getUsuario() {
		return uchofer;
	}

	public void setUsuario(UsuarioChofer usuario) {
		this.uchofer = usuario;
	}

	@Override
	public String toString() {
		return "HoraTrabajada [id=" + id + ", rut=" + rut + ", createdAt=" + createdAt + ", arriendo=" + arriendo
				+ ", uchofer=" + uchofer + "]";
	}

}
