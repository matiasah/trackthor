package cl.trackthor.repository;

import cl.trackthor.model.GestionEmpresa;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "gestiones-empresas", collectionResourceRel = "gestiones-empresas")
public interface GestionEmpresaRepository extends CrudRepository<GestionEmpresa, Long> {
    
    @Override
    public List<GestionEmpresa> findAll();
    
    @RestResource(path = "page", rel = "gestiones-empresas")
    public Page<GestionEmpresa> findBy(Pageable pageable);

}
