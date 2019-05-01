package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trs_pago")
public class Pago implements Serializable {
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

    @Column(name = "lis_fecha", nullable = false)
    private java.sql.Timestamp createAt;
    
    //TODO
    private Cobranza cobranza;
    private Usuario usuario;
    
    @Override
	public String toString() {
		return "Pago [id=" + id + ", createAt=" + createAt + ", cobranza=" + cobranza + ", usuario=" + usuario + "]";
	}
	public Pago() {
		super();
	}
	public Pago(long id, Timestamp createAt, Cobranza cobranza, Usuario usuario) {
		super();
		this.id = id;
		this.createAt = createAt;
		this.cobranza = cobranza;
		this.usuario = usuario;
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
	public Cobranza getCobranza() {
		return cobranza;
	}
	public void setCobranza(Cobranza cobranza) {
		this.cobranza = cobranza;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
    
    
    

}
