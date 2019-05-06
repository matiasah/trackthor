package cl.trackthor.repository;

import cl.trackthor.model.UsuarioChofer;
import javax.transaction.Transactional;

@Transactional
public interface UsuarioChoferRepository extends UsuarioBaseRepository<UsuarioChofer> {

}
