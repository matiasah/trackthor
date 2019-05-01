package cl.trackthor.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trs_ges_empresa")
public class GestionEmpresa implements Serializable{
	
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

    @Column(name = "lis_fecha", nullable = false)
    private java.sql.Timestamp createAt;
    
    //TODO
    private Usuario usiario;
    private Empresa empresa;
    
    

}
