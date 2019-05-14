package cl.trackthor.repository;

import cl.trackthor.model.Maquina;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "maquinas", collectionResourceRel = "maquinas")
public interface MaquinaRepository extends PagingAndSortingRepository<Maquina,Long> {

    @Override
    public Page<Maquina> findAll(Pageable pageable);

}
