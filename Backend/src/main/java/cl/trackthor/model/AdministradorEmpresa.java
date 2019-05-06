package cl.trackthor.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.Arrays;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@Table(name = "trs_adm_empresa")
public class AdministradorEmpresa extends Usuario {

    // TODO
    @OneToMany(mappedBy = "admempresa")
    private List<GestionEmpresa> gestores;

    @OneToMany(mappedBy = "admempresa")
    private List<Pago> pago;

    public AdministradorEmpresa() {
        super();
    }

    public AdministradorEmpresa(List<GestionEmpresa> gestores, List<Pago> pago) {
        super();
        this.gestores = gestores;
        this.pago = pago;
    }

    public List<GestionEmpresa> getGestores() {
        return gestores;
    }

    public void setGestores(List<GestionEmpresa> gestores) {
        this.gestores = gestores;
    }

    public List<Pago> getPago() {
        return pago;
    }

    public void setPago(List<Pago> pago) {
        this.pago = pago;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority("USER_ADMIN_EMPRESA"));
    }

}
