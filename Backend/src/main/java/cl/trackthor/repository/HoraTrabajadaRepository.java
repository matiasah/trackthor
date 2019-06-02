package cl.trackthor.repository;

import cl.trackthor.model.HoraTrabajada;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "horas-trabajadas", collectionResourceRel = "horas-trabajadas")
public interface HoraTrabajadaRepository extends CrudRepository<HoraTrabajada, Long> {
    
    @Override
    public List<HoraTrabajada> findAll();
    
    @RestResource(path = "page", rel = "horas-trabajadas")
    public Page<HoraTrabajada> findBy(Pageable pageable);

}
