package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Time;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trs_hora_trabajada")
public class HoraTrabajada implements Serializable{
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "hrt_rut", nullable = false)
    private Time rut;
    
    @Column(name = "hrt_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
    
    //TODO
    private Arriendo arriendo;
    private Usuario usuario;
    

}
