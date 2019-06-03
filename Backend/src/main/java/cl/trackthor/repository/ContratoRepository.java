package cl.trackthor.repository;

import cl.trackthor.model.Contrato;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "contratos", collectionResourceRel = "contratos")
public interface ContratoRepository extends CrudRepository<Contrato, Long> {

    @Override
    public List<Contrato> findAll();
    
    @RestResource(path = "page", rel = "contratos")
    public Page<Contrato> findBy(Pageable pageable);

}
