package cl.trackthor.repository;

import cl.trackthor.model.Empresa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface EmpresaRepository extends PagingAndSortingRepository<Empresa, Long> {

    @Override

    Page<Empresa> findAll(Pageable pageable);

}
