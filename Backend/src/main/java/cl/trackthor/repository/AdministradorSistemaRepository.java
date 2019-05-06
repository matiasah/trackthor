package cl.trackthor.repository;

import cl.trackthor.model.AdministradorSistema;
import javax.transaction.Transactional;

@Transactional
public interface AdministradorSistemaRepository extends UsuarioBaseRepository<AdministradorSistema> {

}
