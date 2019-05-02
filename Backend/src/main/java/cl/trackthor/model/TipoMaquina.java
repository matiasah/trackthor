package cl.trackthor.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trs_tipo_maquina")
public class TipoMaquina implements Serializable{
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "tip_nombre", nullable = false)
    private String nombre;
    
    @Column(name = "tip_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
}
