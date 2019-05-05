package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Time;
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
import javax.persistence.Table;

@Entity
@Table(name = "trs_arriendo")
public class Arriendo implements Serializable {
	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "arr_inicio", nullable = false)
	private java.time.LocalDateTime inicio;

	@Column(name = "arr_termino", nullable = false)
	private java.time.LocalDateTime termino;

	@Column(name = "arr_create_at", nullable = false)
	private java.time.LocalDateTime createdAt;

	// TODO
	@ManyToOne()
	@JoinColumn(name = "maquina_id")
	private Maquina maquina;

	@ManyToOne()
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;

	@OneToMany(mappedBy = "arriendo")
	private List<HoraTrabajada> horasTrabajadas;

	public Arriendo() {
		super();
	}

	public Arriendo(long id, LocalDateTime inicio, LocalDateTime termino, LocalDateTime createdAt, Maquina maquina,
			Cliente cliente, List<HoraTrabajada> horasTrabajadas) {
		super();
		this.id = id;
		this.inicio = inicio;
		this.termino = termino;
		this.createdAt = createdAt;
		this.maquina = maquina;
		this.cliente = cliente;
		this.horasTrabajadas = horasTrabajadas;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public java.time.LocalDateTime getInicio() {
		return inicio;
	}

	public void setInicio(java.time.LocalDateTime inicio) {
		this.inicio = inicio;
	}

	public java.time.LocalDateTime getTermino() {
		return termino;
	}

	public void setTermino(java.time.LocalDateTime termino) {
		this.termino = termino;
	}

	public java.time.LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(java.time.LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public Maquina getMaquina() {
		return maquina;
	}

	public void setMaquina(Maquina maquina) {
		this.maquina = maquina;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public List<HoraTrabajada> getHorasTrabajadas() {
		return horasTrabajadas;
	}

	public void setHorasTrabajadas(List<HoraTrabajada> horasTrabajadas) {
		this.horasTrabajadas = horasTrabajadas;
	}

	@Override
	public String toString() {
		return "Arriendo [id=" + id + ", inicio=" + inicio + ", termino=" + termino + ", createdAt=" + createdAt
				+ ", maquina=" + maquina + ", cliente=" + cliente + ", horasTrabajadas=" + horasTrabajadas + "]";
	}

}
