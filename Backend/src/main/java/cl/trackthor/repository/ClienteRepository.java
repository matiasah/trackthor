package cl.trackthor.repository;

import cl.trackthor.model.Cliente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ClienteRepository extends PagingAndSortingRepository<Cliente, Long> {

    @Override
    Page<Cliente> findAll(Pageable pageable);

}
