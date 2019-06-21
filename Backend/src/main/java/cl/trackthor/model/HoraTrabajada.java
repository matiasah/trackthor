package cl.trackthor.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.time.ZonedDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.Duration;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "trs_hora_trabajada")
public class HoraTrabajada implements Serializable {

    private static final long serialVersionUID = 3140098477521042158L;

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "hrt_horas", nullable = false)
    private Integer horas;

    @ManyToOne
    @JoinColumn(name = "hrs_arriendo_id")
    private Arriendo arriendo;

    @ManyToOne
    @JoinColumn(name = "hrs_usuario_id")
    private UsuarioChofer usuario;
    
    @CreationTimestamp
    @Column(name = "hrt_created_at", nullable = false)
    private ZonedDateTime createdAt;

    public HoraTrabajada() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getHoras() {
        return horas;
    }

    public void setHoras(Integer horas) {
        this.horas = horas;
    }

    public Arriendo getArriendo() {
        return arriendo;
    }

    public void setArriendo(Arriendo arriendo) {
        this.arriendo = arriendo;
    }

    public UsuarioChofer getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioChofer usuario) {
        this.usuario = usuario;
    }

}
