package cl.trackthor.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
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
    
    //TODO
    @OneToOne()
    private Maquina maquina;

	public TipoMaquina() {
		super();
	}

	public TipoMaquina(long id, String nombre, Maquina maquina) {
		super();
		this.id = id;
		this.nombre = nombre;
	
		this.maquina = maquina;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Maquina getMaquina() {
		return maquina;
	}

	public void setMaquina(Maquina maquina) {
		this.maquina = maquina;
	}

	@Override
	public String toString() {
		return "TipoMaquina [id=" + id + ", nombre=" + nombre + ", maquina=" + maquina
				+ "]";
	}
    
    
}
