package cl.trackthor.repository;


import cl.trackthor.model.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

@NoRepositoryBean
public interface UsuarioBaseRepository<T extends Usuario> extends PagingAndSortingRepository<T, Long> {

    @Override
    Page<T> findAll(Pageable pageable);

}
