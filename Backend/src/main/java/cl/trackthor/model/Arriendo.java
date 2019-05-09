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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "trs_arriendo")
public class Arriendo implements Serializable {

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "arr_inicio", nullable = false)
    private ZonedDateTime inicio;

    @Column(name = "arr_termino", nullable = false)
    private ZonedDateTime termino;

    @ManyToOne
    @JoinColumn(name = "maquina_id")
    private Maquina maquina;

    @ManyToOne
    @JoinColumn(name = "arr_cliente_id")
    private Cliente cliente;

    @OneToMany(mappedBy = "arriendo")
    private Set<HoraTrabajada> horasTrabajadas = new HashSet<>();
    
    @CreationTimestamp
    @Column(name = "arr_created_at", nullable = false)
    private ZonedDateTime createdAt;

    public Arriendo() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getInicio() {
        return inicio;
    }

    public void setInicio(ZonedDateTime inicio) {
        this.inicio = inicio;
    }

    public ZonedDateTime getTermino() {
        return termino;
    }

    public void setTermino(ZonedDateTime termino) {
        this.termino = termino;
    }

    public Maquina getMaquina() {
        return maquina;
    }

    public void setMaquina(Maquina maquina) {
        this.maquina = maquina;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Set<HoraTrabajada> getHorasTrabajadas() {
        return horasTrabajadas;
    }

    public void setHorasTrabajadas(Set<HoraTrabajada> horasTrabajadas) {
        this.horasTrabajadas = horasTrabajadas;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

}
