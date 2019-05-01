package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="trs_contrato")
public class Contrato implements Serializable{
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "lis_fecha", nullable = false)
    private java.sql.Timestamp createAt;
    //TODO
    @OneToOne
    private Plan plan;
    
    private Cobranza cobranza;
    
    
    
	public Contrato() {
		super();
	}
    
	public Contrato(long id, Timestamp createAt, Plan plan, Cobranza cobranza) {
		super();
		this.id = id;
		this.createAt = createAt;
		this.plan = plan;
		this.cobranza = cobranza;
	}
	public Cobranza getCobranza() {
		return cobranza;
	}
	public void setCobranza(Cobranza cobranza) {
		this.cobranza = cobranza;
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
	public Plan getPlan() {
		return plan;
	}
	public void setPlan(Plan plan) {
		this.plan = plan;
	}



    
    

}
