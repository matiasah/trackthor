/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.trackthor.controller;

import cl.trackthor.model.AdministradorEmpresa;
import cl.trackthor.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Matías Hermosilla
 */
@RestController
@RequestMapping("auth")
public class AuthController {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @Autowired
    @Qualifier("userPasswordEncoder")
    private PasswordEncoder userPasswordEncoder;
    
    @PreAuthorize("true")
    @PostMapping("store")
    public boolean store(@RequestBody AdministradorEmpresa usuario) {
        // Obtener contraseña de usuario
        String password = usuario.getPassword();
        
        // Codificar contraseña
        String encodedPassword = this.userPasswordEncoder.encode(password);
        
        // Re-asignar contraseña codificada
        usuario.setPassword(encodedPassword);
        
        // Registrar usuario
        this.usuarioRepository.save(usuario);
        
        return usuario.getId() > 0;
    }
    
}
