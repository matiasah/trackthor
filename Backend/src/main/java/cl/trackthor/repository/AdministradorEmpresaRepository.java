package cl.trackthor.repository;

import cl.trackthor.model.AdministradorEmpresa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import javax.transaction.Transactional;

@Transactional
public interface AdministradorEmpresaRepository extends UsuarioBaseRepository<AdministradorEmpresa> {

}
