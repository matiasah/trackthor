package cl.trackthor.repository;

import cl.trackthor.model.Arriendo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ArriendoRepository extends PagingAndSortingRepository<Arriendo, Long> {

    @Override
    public Page<Arriendo> findAll(Pageable pageable);

}
