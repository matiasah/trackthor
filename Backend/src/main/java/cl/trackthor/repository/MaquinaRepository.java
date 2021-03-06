package cl.trackthor.repository;

import cl.trackthor.model.Maquina;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "maquinas", collectionResourceRel = "maquinas")
public interface MaquinaRepository extends CrudRepository<Maquina, Long> {
    
    @Override
    public List<Maquina> findAll();

    @RestResource(path = "page", rel = "maquinas")
    public Page<Maquina> findBy(Pageable pageable);

    @RestResource(path = "page-principal", rel = "maquinas")
    @Query("SELECT m FROM Maquina m INNER JOIN m.empresa e INNER JOIN e.gestores g WHERE g.usuario.id = ?#{ principal?.id }")
    public Page<Maquina> findByPrincipal(Pageable pageable);

    @RestResource(path = "page-chofer", rel = "maquinas")
    @Query("SELECT m FROM Maquina m INNER JOIN m.empresa e INNER JOIN e.usuariosChoferes u WHERE u.id = ?#{ principal?.id }")
    public Page<Maquina> findByPrincipalChofer(Pageable pageable);

    @RestResource(path = "principal", rel = "maquinas")
    @Query("SELECT m FROM Maquina m INNER JOIN m.empresa e INNER JOIN e.gestores g WHERE g.usuario.id = ?#{ principal?.id }")
    public List<Maquina> findByPrincipal();

}
