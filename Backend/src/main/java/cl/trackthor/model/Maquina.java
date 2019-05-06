package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;
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

@Entity
@Table(name = "trs_maquina")
public class Maquina implements Serializable {

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "maq_empresa_id")
    private Empresa empresa;

    @ManyToOne
    @JoinColumn(name = "maq_tipo_maquina_id")
    private TipoMaquina tipoMaquina;

    @OneToMany(mappedBy = "maquina")
    private Set<Arriendo> arriendos;
    
    @Column(name = "maq_created_at", nullable = false)
    private LocalDateTime createdAt;

    public Maquina() {
        
    }

    
}
