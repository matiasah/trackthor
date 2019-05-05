package cl.trackthor.repository;

import cl.trackthor.model.TipoMaquina;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TipoMaquinaRepository extends PagingAndSortingRepository<TipoMaquina, Long> {

    @Override
    Page<TipoMaquina> findAll(Pageable pageable);

}
