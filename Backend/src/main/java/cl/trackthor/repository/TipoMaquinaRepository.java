package cl.trackthor.repository;

import cl.trackthor.model.TipoMaquina;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "tipos-maquinas", collectionResourceRel = "tipos-maquinas")
public interface TipoMaquinaRepository extends CrudRepository<TipoMaquina, Long> {
    
    @Override
    public List<TipoMaquina> findAll();
    
    @RestResource(path = "page", rel = "tipos-maquinas")
    public Page<TipoMaquina> findBy(Pageable pageable);

}
