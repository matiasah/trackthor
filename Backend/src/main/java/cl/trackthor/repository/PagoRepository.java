package cl.trackthor.repository;

import cl.trackthor.model.Pago;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PagoRepository extends PagingAndSortingRepository<Pago, Long> {

    @Override
    Page<Pago> findAll(Pageable pageable);

}

