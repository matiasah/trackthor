package cl.trackthor.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trs_alerta")
public class Alerta implements Serializable{
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "ale_descripcion", nullable = false)
    private String descripcion;
    
    @Column(name = "ale_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
    
    //TODO
    private Empresa empresa;
    
    
    
    

}
