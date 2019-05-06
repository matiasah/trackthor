package cl.trackthor.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.core.userdetails.UserDetails;

@ApiModel(description = "Detalles sobre el Usuario.")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Entity
@Table(name = "trs_usuario")
public abstract class Usuario implements UserDetails {

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private long id;

    @ApiModelProperty(notes = "Nombre del usuario")
    @NotNull
    @Column(name = "usu_nombre", unique = true)
    private String nombre;

    @RestResource(exported = false)
    @NotNull
    @Column(name = "usu_password")
    private String password;

    @CreationTimestamp
    @Column(name = "usu_created_at")
    private LocalDateTime createdAt;

    public Usuario() {

    }

    @Override
    public String toString() {
        return "Usuario [id=" + id + ", nombre=" + nombre + ", password=" + password + ", createdAt=" + createdAt + "]";
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    @Override
    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    @Override
    public String getUsername() {
        return this.nombre;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
