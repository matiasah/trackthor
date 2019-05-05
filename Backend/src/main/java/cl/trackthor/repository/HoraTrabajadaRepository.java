package cl.trackthor.repository;

import cl.trackthor.model.HoraTrabajada;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface HoraTrabajadaRepository extends PagingAndSortingRepository<HoraTrabajada, Long> {

    @Override
    Page<HoraTrabajada> findAll(Pageable pageable);

}
