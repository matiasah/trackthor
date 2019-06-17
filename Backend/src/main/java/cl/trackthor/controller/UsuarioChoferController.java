/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.trackthor.controller;

import cl.trackthor.exception.EmpresaNoGestionadaException;
import cl.trackthor.exception.NoIdException;
import cl.trackthor.exception.NoUsuarioException;
import cl.trackthor.exception.UsuarioNoAdministradorEmpresaException;
import cl.trackthor.exception.UsuarioNoExisteException;
import cl.trackthor.model.AdministradorEmpresa;
import cl.trackthor.model.Empresa;
import cl.trackthor.model.UsuarioChofer;
import cl.trackthor.repository.GestionEmpresaRepository;
import cl.trackthor.repository.UsuarioChoferRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.hateoas.Resource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Matías Hermosilla
 */
@RestController
@RequestMapping("usuarios-choferes")
public class UsuarioChoferController {

    @Autowired
    private UsuarioChoferRepository usuarioChoferRepository;

    @Autowired
    private GestionEmpresaRepository gestionEmpresaRepository;

    @Autowired
    @Qualifier("userPasswordEncoder")
    private PasswordEncoder userPasswordEncoder;

    @PreAuthorize("true")
    @PostMapping
    public Resource<UsuarioChofer> store(@RequestBody Resource<UsuarioChofer> bodyResource, Authentication auth)
            throws UsuarioNoAdministradorEmpresaException, NoUsuarioException, EmpresaNoGestionadaException {
        // Obtener usuario
        Object principal = auth.getPrincipal();

        // Si el usuario no es administrador de empresa, detener ejecución del método
        if (!(principal instanceof AdministradorEmpresa)) {
            throw new UsuarioNoAdministradorEmpresaException();
        }

        // Obtener objeto usuario
        UsuarioChofer usuario = bodyResource.getContent();

        // Verificar si el objeto usuario no es nulo
        if (usuario == null) {
            throw new NoUsuarioException();
        }

        // Quitar ID (para evitar que sobreescriba un usuario existente)
        usuario.setId(null);

        // Obtener empresa del usuario
        Empresa empresa = usuario.getEmpresa();

        // Si no existe una gestion de empresa con el principal
        if (!this.gestionEmpresaRepository.findByEmpresaAndPrincipal(empresa).isPresent()) {
            throw new EmpresaNoGestionadaException();
        }

        // Obtener contraseña de usuario
        String password = usuario.getPassword();

        // Codificar contraseña
        String encodedPassword = this.userPasswordEncoder.encode(password);

        // Re-asignar contraseña codificada
        usuario.setPassword(encodedPassword);

        // Crear usuario
        this.usuarioChoferRepository.save(usuario);

        // Retornar recurso
        return new Resource<>(usuario);
    }

    @PreAuthorize("true")
    @PutMapping
    public Resource<UsuarioChofer> update(@RequestBody Resource<UsuarioChofer> bodyResource, Authentication auth)
            throws UsuarioNoAdministradorEmpresaException, NoUsuarioException, NoIdException, UsuarioNoExisteException,
            EmpresaNoGestionadaException {
        // Obtener usuario
        Object principal = auth.getPrincipal();

        // Si el usuario no es administrador de empresa, detener ejecución del método
        if (!(principal instanceof AdministradorEmpresa)) {
            throw new UsuarioNoAdministradorEmpresaException();
        }

        // Obtener objeto usuario
        UsuarioChofer usuario = bodyResource.getContent();

        // Verificar si el objeto usuario no es nulo
        if (usuario == null) {
            throw new NoUsuarioException();
        }

        // Verificar si el usuario tiene id
        if (usuario.getId() == null) {
            throw new NoIdException();
        }

        // Obtener Optional de mismo usuario
        Optional<UsuarioChofer> usuarioOptional = this.usuarioChoferRepository.findById(usuario.getId());

        // Si el usuario no existe
        if (!usuarioOptional.isPresent()) {
            throw new UsuarioNoExisteException();
        }

        // Obtener objeto usuario del optional
        UsuarioChofer usuarioBD = usuarioOptional.get();

        // La empresa del usuario pertenece al principal
        if (!this.gestionEmpresaRepository.findByEmpresaAndPrincipal(usuarioBD.getEmpresa()).isPresent()) {
            throw new EmpresaNoGestionadaException();
        }

        // Obtener empresa del usuario
        Empresa empresa = usuario.getEmpresa();

        // Si no existe una gestion de empresa con el principal
        if (!this.gestionEmpresaRepository.findByEmpresaAndPrincipal(empresa).isPresent()) {
            throw new EmpresaNoGestionadaException();
        }

        // Obtener contraseña de usuario
        String password = usuario.getPassword();

        // Codificar contraseña
        String encodedPassword = this.userPasswordEncoder.encode(password);

        // Re-asignar contraseña codificada
        usuario.setPassword(encodedPassword);

        // Actualizar usuario
        this.usuarioChoferRepository.save(usuario);

        // Retornar recurso
        return new Resource<>(usuario);
    }

}
