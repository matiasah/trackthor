package cl.trackthor.repository;

import cl.trackthor.model.AdministradorSistema;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "administradores-sistema", collectionResourceRel = "administradores-sistema")
public interface AdministradorSistemaRepository extends UsuarioBaseRepository<AdministradorSistema> {

    @Override
    public List<AdministradorSistema> findAll();
    
    @RestResource(path = "page", rel = "administradores-sistemas")
    public Page<AdministradorSistema> findBy(Pageable pageable);
    
}
