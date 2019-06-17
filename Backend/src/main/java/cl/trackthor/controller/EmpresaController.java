/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.trackthor.controller;

import cl.trackthor.model.AdministradorEmpresa;
import cl.trackthor.model.AdministradorSistema;
import cl.trackthor.model.Empresa;
import cl.trackthor.model.GestionEmpresa;
import cl.trackthor.repository.EmpresaRepository;
import cl.trackthor.repository.GestionEmpresaRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Matías Hermosilla
 */
@RepositoryRestController
@RequestMapping("empresas")
public class EmpresaController {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private GestionEmpresaRepository gestionEmpresaRepository;

    @Secured("IS_AUTHENTICATED_FULLY")
    @PostMapping("principal")
    public ResponseEntity<Empresa> store(@RequestBody Empresa empresa, Authentication auth) {
        // Obtener usuario
        Object principal = auth.getPrincipal();

        if (principal instanceof AdministradorEmpresa) {
            // Crear gestion
            GestionEmpresa gestion = new GestionEmpresa();

            // Asignar usuario
            gestion.setUsuario((AdministradorEmpresa) principal);

            // Asignar empresa
            gestion.setEmpresa(empresa);

            // Quitar ID a empresa (para evitar modificar una empresa existente)
            empresa.setId(null);

            // Almacenar empresa
            this.empresaRepository.save(empresa);

            // Almacenar gestion de empresa
            this.gestionEmpresaRepository.save(gestion);

            // Retornar recurso
            return new ResponseEntity(empresa, HttpStatus.CREATED);
        }

        // No retornar recurso
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @Secured("IS_AUTHENTICATED_FULLY")
    @GetMapping("{id}")
    public ResponseEntity<Empresa> get(@PathVariable("id") Long id, Authentication auth) {
        // Obtener usuario
        Object principal = auth.getPrincipal();

        // Referencia a empresa
        Optional<Empresa> optional = null;

        // Si el usuario es administrador de empresa
        if (principal instanceof AdministradorEmpresa) {
            // Buscar empresa
            optional = this.empresaRepository.findByIdAndPrincipal(id);

            // Si el usuario es administrador de sistema
        } else if (principal instanceof AdministradorSistema) {
            // Buscar empresa
            optional = this.empresaRepository.findById(id);

        } else {
            // Usuario no autorizado
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }

        // Si la referencia es válida
        if (optional.isPresent()) {
            // Retornar objeto
            return new ResponseEntity(optional.get(), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @Secured("IS_AUTHENTICATED_FULLY")
    @PutMapping("{id}")
    public ResponseEntity<Empresa> update(@PathVariable("id") Long id, @RequestBody Resource<Empresa> bodyResource,
            Authentication auth) {
        // Obtener usuario
        Object principal = auth.getPrincipal();

        // Referencia a empresa
        Optional<Empresa> optional = null;

        // Si el usuario es administrador de empresa
        if (principal instanceof AdministradorEmpresa) {
            // Buscar empresa
            optional = this.empresaRepository.findByIdAndPrincipal(id);

            // Si el usuario es administrador de sistema
        } else if (principal instanceof AdministradorSistema) {
            // Buscar empresa
            optional = this.empresaRepository.findById(id);

        } else {
            // Usuario no autorizado
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }

        // Si la referencia es válida y hay cuerpo
        if (optional.isPresent() && bodyResource != null) {

            // Obtener empresa del cuerpo
            Empresa bodyEmpresa = bodyResource.getContent();

            // Si la empresa es válida, la empresa del cuerpo es válida y son la misma
            // empresa
            if (optional.isPresent() && bodyEmpresa != null) {

                // Obtener empresa
                Empresa empresa = optional.get();

                if (empresa.getId() == bodyEmpresa.getId()) {
                    // Actualizar la empresa
                    this.empresaRepository.save(bodyEmpresa);

                    // Retornar empresa
                    return new ResponseEntity(empresa, HttpStatus.OK);
                }
            }
            
            return new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @Secured("IS_AUTHENTICATED_FULLY")
    @DeleteMapping("{id}")
    public ResponseEntity<Empresa> delete(@PathVariable("id") Long id, Authentication auth) {
        // Obtener usuario
        Object principal = auth.getPrincipal();

        // Referencia a empresa
        Optional<Empresa> optional = null;

        // Si el usuario es administrador de empresa
        if (principal instanceof AdministradorEmpresa) {
            // Buscar empresa
            optional = this.empresaRepository.findByIdAndPrincipal(id);

            // Si el usuario es administrador de sistema
        } else if (principal instanceof AdministradorSistema) {
            // Buscar empresa
            optional = this.empresaRepository.findById(id);

        } else {
            // Usuario no autorizado
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }

        // Si la empresa es válida
        if (optional.isPresent()) {
            // Obtener empresa
            Empresa empresa = optional.get();

            // Eliminar la empresa
            this.empresaRepository.delete(empresa);

            // Retornar empresa
            return new ResponseEntity(empresa, HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

}
