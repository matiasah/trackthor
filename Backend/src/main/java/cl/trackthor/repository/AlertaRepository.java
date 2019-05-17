package cl.trackthor.repository;

import cl.trackthor.model.Alerta;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "alertas", collectionResourceRel = "alertas")
public interface AlertaRepository extends CrudRepository<Alerta, Long> {
    
    @Override
    public List<Alerta> findAll();
    
    @RestResource(path = "page", rel = "alertas")
    public Page<Alerta> findBy(Pageable pageable);

}
