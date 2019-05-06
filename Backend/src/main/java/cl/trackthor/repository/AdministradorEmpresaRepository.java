package cl.trackthor.repository;

import cl.trackthor.model.AdministradorEmpresa;
import javax.transaction.Transactional;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@Transactional
@RepositoryRestResource(path = "administradores-empresas", collectionResourceRel = "administradores-empresas")
public interface AdministradorEmpresaRepository extends UsuarioBaseRepository<AdministradorEmpresa> {

}
