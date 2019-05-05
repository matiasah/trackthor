package cl.trackthor.repository;

import cl.trackthor.model.Cobranza;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CobranzaRepository extends PagingAndSortingRepository<Cobranza, Long> {

    @Override
    Page<Cobranza> findAll(Pageable pageable);

}
