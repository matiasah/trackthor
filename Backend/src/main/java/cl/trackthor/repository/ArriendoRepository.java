package cl.trackthor.repository;

import cl.trackthor.model.Arriendo;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "arriendos", collectionResourceRel = "arriendos")
public interface ArriendoRepository extends CrudRepository<Arriendo, Long> {
    
    @Override
    public List<Arriendo> findAll();

    @RestResource(path = "page", rel = "arriendos")
    public Page<Arriendo> findBy(Pageable pageable);

}
