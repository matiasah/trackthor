package cl.trackthor.repository;

import cl.trackthor.model.Usuario;

public interface UsuarioRepository extends UsuarioBaseRepository<Usuario> {
    
    public Usuario findByNombre(String nombre);
    
}
