package cl.trackthor.model;

import java.io.Serializable;
import java.time.ZonedDateTime;

import javax.persistence.CascadeType;
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
@Table(name = "trs_gestion_empresas")
public class GestionEmpresa implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "gem_empresa_id")
    private Empresa empresa;

    @ManyToOne
    @JoinColumn(name = "gem_usuario_id")
    private AdministradorEmpresa usuario;

    @CreationTimestamp
    @Column(name = "gem_created_at", nullable = false)
    private ZonedDateTime createdAt;

    public GestionEmpresa() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
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
