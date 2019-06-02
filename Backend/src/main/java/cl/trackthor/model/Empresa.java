package cl.trackthor.model;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "trs_empresa")
public class Empresa implements Serializable {

    private static final long serialVersionUID = -6109615800837182852L;

    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "emp_nombre", nullable = false)
    private String nombre;

    @Column(name = "emp_rut", nullable = false)
    private String rut;

    @Column(name = "sub_telefono", nullable = false)
    private String telefono;

    @OneToMany(mappedBy = "empresa")
    private Set<Contrato> contratos = new HashSet<>();

    @OneToMany(mappedBy = "empresa")
    private Set<Maquina> maquinas = new HashSet<>();
    
    @OneToMany(mappedBy = "empresa")
    private Set<UsuarioChofer> usuariosChoferes = new HashSet<>();

    @OneToMany(mappedBy = "empresa")
    private Set<Alerta> alertas = new HashSet<>();

    @OneToMany(mappedBy = "empresa", cascade = CascadeType.REMOVE)
    private Set<GestionEmpresa> gestores = new HashSet<>();
    
    @CreationTimestamp
    @Column(name = "emp_created_at", nullable = false)
    private ZonedDateTime createdAt;

    public Empresa() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRut() {
        return rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Set<Contrato> getContratos() {
        return contratos;
    }

    public void setContratos(Set<Contrato> contratos) {
        this.contratos = contratos;
    }

    public Set<Maquina> getMaquinas() {
        return maquinas;
    }

    public void setMaquinas(Set<Maquina> maquinas) {
        this.maquinas = maquinas;
    }

    public Set<UsuarioChofer> getUsuariosChoferes() {
        return usuariosChoferes;
    }

    public void setUsuariosChoferes(Set<UsuarioChofer> usuariosChoferes) {
        this.usuariosChoferes = usuariosChoferes;
    }

    public Set<Alerta> getAlertas() {
        return alertas;
    }

    public void setAlertas(Set<Alerta> alertas) {
        this.alertas = alertas;
    }

    public Set<GestionEmpresa> getGestores() {
        return gestores;
    }

    public void setGestores(Set<GestionEmpresa> gestores) {
        this.gestores = gestores;
    }

}
