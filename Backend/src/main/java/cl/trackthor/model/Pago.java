package cl.trackthor.model;

import java.io.Serializable;
import java.time.ZonedDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "trs_pago")
public class Pago implements Serializable {

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "pag_cobranza_id")
    private Cobranza cobranza;

    @ManyToOne
    @JoinColumn(name = "pag_usuario_id")
    private AdministradorEmpresa usuario;
    
    @CreationTimestamp
    @Column(name = "pag_created_at", nullable = false)
    private ZonedDateTime createdAt;
    
    public Pago() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cobranza getCobranza() {
        return cobranza;
    }

    public void setCobranza(Cobranza cobranza) {
        this.cobranza = cobranza;
    }

    public AdministradorEmpresa getUsuario() {
        return usuario;
    }

    public void setUsuario(AdministradorEmpresa usuario) {
        this.usuario = usuario;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
}
