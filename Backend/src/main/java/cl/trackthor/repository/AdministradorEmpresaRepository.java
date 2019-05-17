package cl.trackthor.repository;

import cl.trackthor.model.AdministradorEmpresa;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@Transactional
@RepositoryRestResource(path = "administradores-empresas", collectionResourceRel = "administradores-empresas")
public interface AdministradorEmpresaRepository extends UsuarioBaseRepository<AdministradorEmpresa> {

    @Override
    public List<AdministradorEmpresa> findAll();
    
    @RestResource(path = "page", rel = "administradores-empresas")
    public Page<AdministradorEmpresa> findBy(Pageable pageable);
    
}
