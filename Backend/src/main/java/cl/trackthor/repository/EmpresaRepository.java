package cl.trackthor.repository;

import cl.trackthor.model.Empresa;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "empresas", collectionResourceRel = "empresas")
public interface EmpresaRepository extends CrudRepository<Empresa, Long> {
    
    @Override
    public List<Empresa> findAll();
    
    @RestResource(path = "page", rel = "empresas")
    public Page<Empresa> findBy(Pageable pageable);

    @RestResource(path = "principal", rel = "empresas")
    @Query("SELECT e FROM Empresa e INNER JOIN e.gestores g INNER JOIN g.usuario u WHERE u.id = ?#{ principal?.id }")
    public List<Empresa> findByPrincipal();
    
    @RestResource(path = "page-principal", rel = "empresas")
    @Query("SELECT e FROM Empresa e INNER JOIN e.gestores g INNER JOIN g.usuario u WHERE u.id = ?#{ principal?.id }")
    public Page<Empresa> findByPrincipal(Pageable pageable);

    @RestResource(exported = false)
    @Query("SELECT e FROM Empresa e INNER JOIN e.gestores g INNER JOIN g.usuario u WHERE u.id = ?#{ principal?.id } AND e.id = ?1")
    public Optional<Empresa> findByIdAndPrincipal(Long id);
    
}
