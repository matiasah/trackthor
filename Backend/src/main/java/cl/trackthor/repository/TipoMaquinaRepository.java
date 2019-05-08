package cl.trackthor.repository;

import cl.trackthor.model.TipoMaquina;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "tipos-maquinas", collectionResourceRel = "tipos-maquinas")
public interface TipoMaquinaRepository extends PagingAndSortingRepository<TipoMaquina, Long> {

    @Override
    public Page<TipoMaquina> findAll(Pageable pageable);

}
