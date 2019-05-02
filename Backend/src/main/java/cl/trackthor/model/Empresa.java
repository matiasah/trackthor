package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="trs_empresa")
public class Empresa implements Serializable{
	
    @Column(name = "id", nullable = false, length = 11)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    
    @Column(name = "emp_nombre", nullable = false)
    private String nombre;
    
    @Column(name = "emp_rut", nullable = false)
    private String rut;
    
    @Column(name = "sub_telefono", nullable = false)
    private String telefono;
    
    @Column(name = "emp_create_at", nullable = false)
    private java.time.LocalDateTime createdAt;
    
    //TODO
    @OneToMany(mappedBy = "empresa")
    private List<Contrato> contratos;
    
    @OneToMany(mappedBy = "empresa")
    private List<Maquina> maquinas;
    
    @OneToMany(mappedBy = "empresa")
    private List<Alerta> alertas;
    
    @OneToMany(mappedBy = "empresa")
    private List<GestionEmpresa> gestores;
    
    

	public Empresa(long id, String nombre, String rut, String telefono, LocalDateTime createdAt,
			List<Contrato> contratos, List<Maquina> maquinas, List<Alerta> alertas, List<GestionEmpresa> gestores) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.rut = rut;
		this.telefono = telefono;
		this.createdAt = createdAt;
		this.contratos = contratos;
		this.maquinas = maquinas;
		this.alertas = alertas;
		this.gestores = gestores;
	}

	public Empresa() {
		super();
	}

	@Override
	public String toString() {
		return "Empresa [id=" + id + ", nombre=" + nombre + ", rut=" + rut + ", telefono=" + telefono + ", createdAt="
				+ createdAt + ", contratos=" + contratos + ", maquinas=" + maquinas + ", alertas=" + alertas
				+ ", gestores=" + gestores + "]";
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

	public java.time.LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(java.time.LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public List<Contrato> getContratos() {
		return contratos;
	}

	public void setContratos(List<Contrato> contratos) {
		this.contratos = contratos;
	}

	public List<Maquina> getMaquinas() {
		return maquinas;
	}

	public void setMaquinas(List<Maquina> maquinas) {
		this.maquinas = maquinas;
	}

	public List<Alerta> getAlertas() {
		return alertas;
	}

	public void setAlertas(List<Alerta> alertas) {
		this.alertas = alertas;
	}

	public List<GestionEmpresa> getGestores() {
		return gestores;
	}

	public void setGestores(List<GestionEmpresa> gestores) {
		this.gestores = gestores;
	}
    
    
    
    
    
    
    
    
    
    
    

}
