package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
    @ManyToOne()
    private Contrato contrato;
    
    @OneToMany()
    private List<Pago> pagos;
    
    
	public Cobranza(long id, long monto, Timestamp createAt, Contrato contrato, List<Pago> pago) {
		super();
		this.id = id;
		this.monto = monto;
		this.createAt = createAt;
		this.contrato = contrato;
		this.pagos = pagos;
	}
	
	public Cobranza() {
		super();
	}
	

    
    
}
