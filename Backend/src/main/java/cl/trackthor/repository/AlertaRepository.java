package cl.trackthor.repository;

import cl.trackthor.model.Alerta;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AlertaRepository extends PagingAndSortingRepository<Alerta, Long> {

    @Override
    public Page<Alerta> findAll(Pageable pageable);

}
