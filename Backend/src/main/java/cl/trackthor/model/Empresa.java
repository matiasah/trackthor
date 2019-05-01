package cl.trackthor.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trs_empresa")
public class Empresa implements Serializable{
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "emp_nombre", nullable = false)
    private String nombre;
    
    @Column(name = "emp_rut", nullable = false)
    private String rut;
    
    @Column(name = "sub_telefono", nullable = false)
    private String telefono;
    
    @Column(name = "emp_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
    
    //TODO
    private Contrato contratos;
    private Maquina maquinas;
    private Alerta alertas;
    
    
    
    
    
    
    
    

}
