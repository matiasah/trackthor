package cl.trackthor.repository;

import cl.trackthor.model.UsuarioChofer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;

@Transactional
public interface UsuarioChoferRepository extends UsuarioBaseRepository<UsuarioChofer> {

}
