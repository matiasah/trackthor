/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.trackthor.controller;

import cl.trackthor.model.Arriendo;
import cl.trackthor.model.Empresa;
import cl.trackthor.model.HoraTrabajada;
import cl.trackthor.model.Maquina;
import cl.trackthor.model.UsuarioChofer;
import cl.trackthor.repository.HoraTrabajadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Matías Hermosilla
 */
@RepositoryRestController
@RequestMapping("horas-trabajadas")
public class HoraTrabajadaController {

    @Autowired
    private HoraTrabajadaRepository horaTrabajadaRepository;

    @Secured("IS_AUTHENTICATED_FULLY")
    @PostMapping
    @ResponseBody
    public ResponseEntity<Resource<HoraTrabajada>> store(@RequestBody Resource<HoraTrabajada> horaTrabajadaResource, Authentication auth) {
        // Obtener principal
        Object principal = auth.getPrincipal();

        if (principal instanceof UsuarioChofer) {
            // Obtener usuario
            UsuarioChofer usuario = (UsuarioChofer) principal;

            // Obtener hora trabajada
            HoraTrabajada horaTrabajada = horaTrabajadaResource.getContent();

            // Obtener arriendo
            Arriendo arriendo = horaTrabajada.getArriendo();

            // Obtener máquina
            Maquina maquina = arriendo.getMaquina();

            // Obtener empresa
            Empresa empresa = maquina.getEmpresa();

            // Si la empresa del chofer es la empresa de la máquina
            if (empresa.getId().equals(usuario.getEmpresa().getId())) {
                // Asignar usuario a hora trabajada
                horaTrabajada.setUsuario(usuario);

                // Guardar recurso
                this.horaTrabajadaRepository.save(horaTrabajada);

                // Retornar recurso
                return new ResponseEntity(new Resource<>(horaTrabajada), HttpStatus.CREATED);
            }

            // No pertenecen a la misma empresa, retornar error
            return new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
        }

        // Usuario no autorizado
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }

}
