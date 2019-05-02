package cl.trackthor.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trs_usuario_chofer")
public class UsuarioChofer implements Serializable{
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "usc_rut", nullable = false)
    private String rut;
    
    @Column(name = "usc_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
    
    //TODO
    private Alerta alertas;
    private HoraTrabajada horasTrabajadas;
    
    
    
    
	

}
