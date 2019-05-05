package cl.trackthor.repository;

import cl.trackthor.model.Maquina;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MaquinaRepository extends PagingAndSortingRepository<Maquina,Long> {

    @Override
    Page<Maquina> findAll(Pageable pageable);

}
