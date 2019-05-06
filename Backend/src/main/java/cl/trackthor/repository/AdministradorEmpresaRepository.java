package cl.trackthor.repository;

import cl.trackthor.model.AdministradorEmpresa;
import javax.transaction.Transactional;

@Transactional
public interface AdministradorEmpresaRepository extends UsuarioBaseRepository<AdministradorEmpresa> {

}
