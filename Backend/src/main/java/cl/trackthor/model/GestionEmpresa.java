package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "trs_gestion_empresas")
public class GestionEmpresa implements Serializable {

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
    
    @Column(name = "gem_created_at", nullable = false)
    private LocalDateTime createdAt;

}
