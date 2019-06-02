package cl.trackthor.repository;

import cl.trackthor.model.Pago;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "pagos", collectionResourceRel = "pagos")
public interface PagoRepository extends CrudRepository<Pago, Long> {
    
    @Override
    public List<Pago> findAll();
    
    @RestResource(path = "page", rel = "pagos")
    public Page<Pago> findBy(Pageable pageable);

}

