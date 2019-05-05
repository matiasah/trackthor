package cl.trackthor.repository;

import cl.trackthor.model.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    
    public Usuario findByNombre(String nombre);
    
}
