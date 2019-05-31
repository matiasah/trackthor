package cl.trackthor.model;

import java.io.Serializable;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "trs_tipo_maquina")
public class TipoMaquina implements Serializable {

    private static final long serialVersionUID = 2382474729320996286L;

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tip_nombre", nullable = false)
    private String nombre;

    @OneToMany(mappedBy = "tipoMaquina")
    private Set<Maquina> maquinas;

    public TipoMaquina() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Set<Maquina> getMaquinas() {
        return maquinas;
    }

    public void setMaquinas(Set<Maquina> maquinas) {
        this.maquinas = maquinas;
    }
    
}
