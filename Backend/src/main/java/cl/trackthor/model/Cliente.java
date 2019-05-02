package cl.trackthor.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trs_cliente")
public class Cliente implements Serializable{
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "cli_nombres", nullable = false)
    private String nombres;
    
    @Column(name = "cli_rut", nullable = false)
    private String rut;
    
    @Column(name = "cli_telefono", nullable = false)
    private String telefono;
    
    @Column(name = "cli_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
    
    //TODO
    private Arriendo arriendos;
	
}
