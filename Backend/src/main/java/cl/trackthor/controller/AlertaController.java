/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.trackthor.controller;

import cl.trackthor.model.Alerta;
import cl.trackthor.model.UsuarioChofer;
import cl.trackthor.repository.AlertaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Matías Hermosilla
 */
@RepositoryRestController
@RequestMapping("alertas")
public class AlertaController {
    
    @Autowired
    private AlertaRepository alertaRepository;
    
    @PreAuthorize("true")
    @PostMapping
    public ResponseEntity<Alerta> store(@RequestBody Alerta alerta, Authentication auth) {
        // Obtener usuario
        Object principal = auth.getPrincipal();

        // Usuario chofer
        if ( principal instanceof UsuarioChofer) {
            // Transformar a usuario
            UsuarioChofer usuario = (UsuarioChofer) principal;

            // Asignar usuario
            alerta.setUsuario(usuario);

            // Asignar empresa
            alerta.setEmpresa(usuario.getEmpresa());

            // Almacenar alerta
            this.alertaRepository.save(alerta);

            // Retornar alerta
            return new ResponseEntity(alerta, HttpStatus.CREATED);
        }

        // Retornar vacio
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }
    
}
