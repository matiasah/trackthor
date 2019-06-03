package cl.trackthor.repository;

import cl.trackthor.model.Cliente;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "clientes", collectionResourceRel = "clientes")
public interface ClienteRepository extends CrudRepository<Cliente, Long> {
    
    @Override
    public List<Cliente> findAll();

    @RestResource(path = "page", rel = "clientes")
    public Page<Cliente> findBy(Pageable pageable);

}
