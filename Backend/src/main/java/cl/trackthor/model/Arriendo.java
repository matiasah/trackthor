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
@Table(name="trs_arriendo")
public class Arriendo implements Serializable{
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "arr_inicio", nullable = false)
    private java.time.LocalDateTime inicio;
    
    @Column(name = "arr_termino", nullable = false)
    private java.time.LocalDateTime termino;
    
    @Column(name = "arr_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
    
    //TODO
    private Cliente cliente;
    private HoraTrabajada horasTrabajadas;
    private Maquina maquina;
    
    
    

}
