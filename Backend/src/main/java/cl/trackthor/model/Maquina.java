package cl.trackthor.model;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "trs_maquina")
public class Maquina implements Serializable {

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "maq_patente", nullable = false)
    private String patente;

    @ManyToOne
    @JoinColumn(name = "maq_empresa_id")
    private Empresa empresa;

    @ManyToOne
    @JoinColumn(name = "maq_tipo_maquina_id")
    private TipoMaquina tipoMaquina;

    @OneToMany(mappedBy = "maquina")
    private Set<Arriendo> arriendos;
    
    @CreationTimestamp
    @Column(name = "maq_created_at", nullable = false)
    private ZonedDateTime createdAt;

    public Maquina() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPatente() {
        return patente;
    }

    public void setPatente(String patente) {
        this.patente = patente;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public TipoMaquina getTipoMaquina() {
        return tipoMaquina;
    }

    public void setTipoMaquina(TipoMaquina tipoMaquina) {
        this.tipoMaquina = tipoMaquina;
    }

    public Set<Arriendo> getArriendos() {
        return arriendos;
    }

    public void setArriendos(Set<Arriendo> arriendos) {
        this.arriendos = arriendos;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

    
}
