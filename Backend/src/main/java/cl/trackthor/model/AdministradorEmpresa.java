package cl.trackthor.model;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@Table(name = "trs_adm_empresa")
public class AdministradorEmpresa extends Usuario {

    private static final long serialVersionUID = -1253563144091729627L;

    @OneToMany(mappedBy = "usuario")
    private Set<GestionEmpresa> gestores = new HashSet<>();

    @OneToMany(mappedBy = "usuario")
    private Set<Pago> pago = new HashSet<>();

    public AdministradorEmpresa() {
        
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER_ADMIN_EMPRESA"));
    }

    public Set<GestionEmpresa> getGestores() {
        return gestores;
    }

    public void setGestores(Set<GestionEmpresa> gestores) {
        this.gestores = gestores;
    }

    public Set<Pago> getPago() {
        return pago;
    }

    public void setPago(Set<Pago> pago) {
        this.pago = pago;
    }
    
}
