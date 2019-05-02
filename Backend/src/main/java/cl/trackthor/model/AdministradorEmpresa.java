package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "trs_adm_empresa")
public class AdministradorEmpresa implements Serializable {

	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "ade_create_at", nullable = false)
	private java.sql.Timestamp createAt;

	// TODO
	@OneToMany(mappedBy = "admempresa")
	private List<GestionEmpresa> gestores;

	@OneToMany(mappedBy = "admempresa")
	private List<Pago> pago;

	public AdministradorEmpresa() {
		super();
	}

	public AdministradorEmpresa(long id, Timestamp createAt, List<GestionEmpresa> gestores, List<Pago> pago) {
		super();
		this.id = id;
		this.createAt = createAt;
		this.gestores = gestores;
		this.pago = pago;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public java.sql.Timestamp getCreateAt() {
		return createAt;
	}

	public void setCreateAt(java.sql.Timestamp createAt) {
		this.createAt = createAt;
	}

	public List<GestionEmpresa> getGestores() {
		return gestores;
	}

	public void setGestores(List<GestionEmpresa> gestores) {
		this.gestores = gestores;
	}

	public List<Pago> getPago() {
		return pago;
	}

	public void setPago(List<Pago> pago) {
		this.pago = pago;
	}

	@Override
	public String toString() {
		return "AdministradorEmpresa [id=" + id + ", createAt=" + createAt + ", gestores=" + gestores + ", pago=" + pago
				+ "]";
	}

}
