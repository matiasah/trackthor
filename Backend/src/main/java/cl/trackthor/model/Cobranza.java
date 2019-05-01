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
@Table(name="trs_cobranza")
public class Cobranza implements Serializable{
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "sub_monto", nullable = false)
    private long monto;
    
    @Column(name = "lis_fecha", nullable = false)
    private java.sql.Timestamp createAt;
    
    //TODO
    private Contrato contrato;
    
    private Pago pago;
    
    
	public Cobranza(long id, long monto, Timestamp createAt, Contrato contrato, Pago pago) {
		super();
		this.id = id;
		this.monto = monto;
		this.createAt = createAt;
		this.contrato = contrato;
		this.pago = pago;
	}
	
	public Cobranza() {
		super();
	}
	
	

	public Pago getPago() {
		return pago;
	}

	public void setPago(Pago pago) {
		this.pago = pago;
	}

	@Override
	public String toString() {
		return "Cobranza [id=" + id + ", monto=" + monto + ", createAt=" + createAt + ", contrato=" + contrato
				+ ", pago=" + pago + "]";
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getMonto() {
		return monto;
	}

	public void setMonto(long monto) {
		this.monto = monto;
	}

	public java.sql.Timestamp getCreateAt() {
		return createAt;
	}

	public void setCreateAt(java.sql.Timestamp createAt) {
		this.createAt = createAt;
	}

	public Contrato getContrato() {
		return contrato;
	}

	public void setContrato(Contrato contrato) {
		this.contrato = contrato;
	}
    
    
}
