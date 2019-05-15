package cl.trackthor.repository;

import cl.trackthor.model.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface UsuarioBaseRepository<T extends Usuario> extends CrudRepository<T, Long> {

}
