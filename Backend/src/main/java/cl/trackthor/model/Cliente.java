package cl.trackthor.model;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "trs_cliente")
public class Cliente implements Serializable {

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cli_nombres", nullable = false)
    private String nombres;

    @Column(name = "cli_rut", nullable = false)
    private String rut;

    @Column(name = "cli_telefono", nullable = false)
    private String telefono;

    @OneToMany(mappedBy = "cliente")
    private Set<Arriendo> arriendos = new HashSet<>();
    
    @CreationTimestamp
    @Column(name = "cli_created_at", nullable = false)
    private ZonedDateTime createdAt;
    
    public Cliente() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getRut() {
        return rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Set<Arriendo> getArriendos() {
        return arriendos;
    }

    public void setArriendos(Set<Arriendo> arriendos) {
        this.arriendos = arriendos;
    }

}
