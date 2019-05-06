package cl.trackthor.model;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@Table(name = "trs_usuario_chofer")
public class UsuarioChofer extends Usuario {

    @Column(name = "usc_rut", nullable = false)
    private String rut;

    @OneToMany(mappedBy = "usuario")
    private Set<Alerta> alertas = new HashSet<>();

    @OneToMany(mappedBy = "usuario")
    private Set<HoraTrabajada> horasTrabajadas = new HashSet<>();

    public UsuarioChofer() {
        
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority("USER_CHOFER"));
    }

    public String getRut() {
        return rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
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
    
}
