package cl.trackthor.repository;

import cl.trackthor.model.Cobranza;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "cobranzas", collectionResourceRel = "cobranzas")
public interface CobranzaRepository extends CrudRepository<Cobranza, Long> {
    
    @Override
    public List<Cobranza> findAll();

    @RestResource(path = "page", rel = "cobranzas")
    public Page<Cobranza> findBy(Pageable pageable);

}
