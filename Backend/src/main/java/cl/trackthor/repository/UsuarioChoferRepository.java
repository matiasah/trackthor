package cl.trackthor.repository;

import cl.trackthor.model.UsuarioChofer;
import javax.transaction.Transactional;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@Transactional
@RepositoryRestResource(path = "usuarios-choferes", collectionResourceRel = "usuarios-choferes")
public interface UsuarioChoferRepository extends UsuarioBaseRepository<UsuarioChofer> {

}
