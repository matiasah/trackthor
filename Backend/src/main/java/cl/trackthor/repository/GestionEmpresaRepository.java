package cl.trackthor.repository;

import cl.trackthor.model.GestionEmpresa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface GestionEmpresaRepository extends PagingAndSortingRepository<GestionEmpresa, Long> {

    @Override
    Page<GestionEmpresa> findAll(Pageable pageable);

}
