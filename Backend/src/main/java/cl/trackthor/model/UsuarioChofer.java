package cl.trackthor.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@Table(name = "trs_usuario_chofer")
public class UsuarioChofer extends Usuario {

    private static final long serialVersionUID = 1L;

    @Column(name = "usc_run", nullable = false)
    private String run;

    @Column(name = "usc_nombres", nullable = false)
    private String nombresChofer;

    @ManyToOne
    @JoinColumn(name = "maq_empresa_id")
    private Empresa empresa;

    @OneToMany(mappedBy = "usuario")
    private Set<Alerta> alertas = new HashSet<>();

    @OneToMany(mappedBy = "usuario")
    private Set<HoraTrabajada> horasTrabajadas = new HashSet<>();

    public UsuarioChofer() {
        
    }

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority("USER_CHOFER"));
    }

    public String getRun() {
        return run;
    }

    public void setRun(String run) {
        this.run = run;
    }

    public String getNombresChofer() {
        return this.nombresChofer;
    }

    public void setNombresChofer(String nombresChofer) {
        this.nombresChofer = nombresChofer;
    }

    public Set<Alerta> getAlertas() {
        return alertas;
    }

    public void setAlertas(Set<Alerta> alertas) {
        this.alertas = alertas;
    }

    public Set<HoraTrabajada> getHorasTrabajadas() {
        return horasTrabajadas;
    }

    public void setHorasTrabajadas(Set<HoraTrabajada> horasTrabajadas) {
        this.horasTrabajadas = horasTrabajadas;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }
    
    
}
