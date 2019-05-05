package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "trs_ges_empresa")
public class GestionEmpresa implements Serializable {

	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "lis_fecha", nullable = false)
	private java.sql.Timestamp createAt;

	// TODO
	@ManyToOne()
	@JoinColumn(name = "empresa_id")
	private Empresa empresa;

	@ManyToOne()
	@JoinColumn(name = "adminempresa_id")
	private AdministradorEmpresa admempresa;

	public GestionEmpresa() {
		super();
	}

	public GestionEmpresa(long id, Timestamp createAt, Empresa empresa, AdministradorEmpresa admempresa) {
		super();
		this.id = id;
		this.createAt = createAt;
		this.empresa = empresa;
		this.admempresa = admempresa;
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

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public AdministradorEmpresa getAdmempresa() {
		return admempresa;
	}

	public void setAdmempresa(AdministradorEmpresa admempresa) {
		this.admempresa = admempresa;
	}

	@Override
	public String toString() {
		return "GestionEmpresa [id=" + id + ", createAt=" + createAt + ", empresa=" + empresa + ", admempresa="
				+ admempresa + "]";
	}

}
