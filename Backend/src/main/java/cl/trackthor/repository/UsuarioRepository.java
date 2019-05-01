package cl.trackthor.repository;

import cl.trackthor.model.Usuario;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Matías Hermosilla
 */
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    
    public Usuario findByNombre(String nombre);
    
}
