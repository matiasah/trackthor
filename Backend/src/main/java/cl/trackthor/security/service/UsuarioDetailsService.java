/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.trackthor.security.service;

import cl.trackthor.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author matia
 */
@Service("userDetailsService")
public class UsuarioDetailsService implements UserDetailsService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String nombre) throws UsernameNotFoundException {
        // Buscar usuario
        UserDetails usuario = this.usuarioRepository.findByNombre(nombre);
        
        // Si usuario existe
        if ( usuario != null ) {
            return usuario;
        }
        
        // Arrojar excepción
        throw new UsernameNotFoundException("'" + nombre + "' not found");
    }
    
}