package cl.trackthor.repository;

import cl.trackthor.model.Contrato;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ContratoRepository extends PagingAndSortingRepository<Contrato, Long> {

    @Override
    Page<Contrato> findAll(Pageable pageable);

}
