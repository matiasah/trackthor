package cl.trackthor.repository;

import cl.trackthor.model.Arriendo;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "arriendos", collectionResourceRel = "arriendos")
public interface ArriendoRepository extends CrudRepository<Arriendo, Long> {

    @Override
    public List<Arriendo> findAll();

    @RestResource(path = "page", rel = "arriendos")
    public Page<Arriendo> findBy(Pageable pageable);

    @RestResource(path = "page-chofer", rel = "arriendos")
    @Query("SELECT a FROM Arriendo a INNER JOIN a.maquina m INNER JOIN m.empresa e INNER JOIN e.usuariosChoferes c WHERE c.id = ?#{ principal?.id }")
    public Page<Arriendo> findByPrincipalChofer(Pageable pageable);

}
