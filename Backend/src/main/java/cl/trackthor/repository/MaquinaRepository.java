package cl.trackthor.repository;

import cl.trackthor.model.Maquina;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "maquinas", collectionResourceRel = "maquinas")
public interface MaquinaRepository extends CrudRepository<Maquina, Long> {
    
    @Override
    public List<Maquina> findAll();

    @RestResource(path = "page", rel = "maquinas")
    public Page<Maquina> findBy(Pageable pageable);

}
