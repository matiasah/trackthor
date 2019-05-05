package cl.trackthor.repository;

import cl.trackthor.model.AdministradorSistema;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import javax.transaction.Transactional;

@Transactional
public interface AdministradorSistemaRepository extends UsuarioBaseRepository<AdministradorSistema> {

}
