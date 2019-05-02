package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;
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
@Table(name = "trs_contrato")
public class Contrato implements Serializable {

	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "con_created_at", nullable = false)
	private java.sql.Timestamp createdAt;

	// TODO
	@ManyToOne()
	@JoinColumn(name = "plan_id")
	private Plan plan;

	@OneToMany(mappedBy = "contrato")
	@JoinColumn(name = "cobranza_id")
	private List<Cobranza> cobranzas;

	@ManyToOne()
	@JoinColumn(name = "empresa_id")
	private Empresa empresa;

	public Contrato() {
		super();
	}

	public Contrato(long id, Timestamp createdAt, Plan plan, List<Cobranza> cobranzas) {
		super();
		this.id = id;
		this.createdAt = createdAt;
		this.plan = plan;
		this.cobranzas = cobranzas;
	}

	public List<Cobranza> getCobranza() {
		return cobranzas;
	}

	public void setCobranza(List<Cobranza> cobranzas) {
		this.cobranzas = cobranzas;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public java.sql.Timestamp getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(java.sql.Timestamp createdAt) {
		this.createdAt = createdAt;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

}
