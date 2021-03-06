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
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "trs_alerta")
public class Alerta implements Serializable {

    private static final long serialVersionUID = -552215270374396948L;

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ale_descripcion", nullable = false)
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "ale_empresa_id")
    private Empresa empresa;

    @ManyToOne
    @JoinColumn(name = "ale_usuario_id")
    private UsuarioChofer usuario;
    
    @CreationTimestamp
    @Column(name = "ale_created_at", nullable = false)
    private ZonedDateTime createdAt;

    public Alerta() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public UsuarioChofer getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioChofer usuario) {
        this.usuario = usuario;
    }

}
