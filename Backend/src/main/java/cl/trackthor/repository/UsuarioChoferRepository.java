package cl.trackthor.repository;

import cl.trackthor.model.UsuarioChofer;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "usuarios-choferes", collectionResourceRel = "usuarios-choferes")
public interface UsuarioChoferRepository extends UsuarioBaseRepository<UsuarioChofer> {
    
    @Override
    public List<UsuarioChofer> findAll();
    
    @RestResource(path = "page", rel = "usuarios-choferes")
    public Page<UsuarioChofer> findBy(Pageable pageable);

}
