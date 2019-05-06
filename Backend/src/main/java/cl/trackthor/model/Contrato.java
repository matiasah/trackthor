package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;
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

@Entity
@Table(name = "trs_contrato")
public class Contrato implements Serializable {

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "con_plan_id")
    private Plan plan;
    
    @ManyToOne
    @JoinColumn(name = "con_empresa_id")
    private Empresa empresa;

    @OneToMany(mappedBy = "contrato")
    private Set<Cobranza> cobranzas = new HashSet<>();

    @Column(name = "con_created_at", nullable = false)
    private LocalDateTime createdAt;

    public Contrato() {
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Plan getPlan() {
        return plan;
    }

    public void setPlan(Plan plan) {
        this.plan = plan;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public Set<Cobranza> getCobranzas() {
        return cobranzas;
    }

    public void setCobranzas(Set<Cobranza> cobranzas) {
        this.cobranzas = cobranzas;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

}
