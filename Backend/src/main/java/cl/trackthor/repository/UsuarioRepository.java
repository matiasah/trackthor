package cl.trackthor.repository;

import cl.trackthor.model.Usuario;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
public interface UsuarioRepository extends UsuarioBaseRepository<Usuario> {
    
    @Override
    public List<Usuario> findAll();
    
    @RestResource(path = "page", rel = "usuarios")
    public Page<Usuario> findBy(Pageable pageable);
    
    public Usuario findByNombre(String nombre);
    
}
