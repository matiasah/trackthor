package cl.trackthor.repository;

import cl.trackthor.model.Empresa;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "empresas", collectionResourceRel = "empresas")
public interface EmpresaRepository extends CrudRepository<Empresa, Long> {
    
    @Override
    public List<Empresa> findAll();
    
    @RestResource(path = "page", rel = "empresas")
    public Page<Empresa> findBy(Pageable pageable);

}
