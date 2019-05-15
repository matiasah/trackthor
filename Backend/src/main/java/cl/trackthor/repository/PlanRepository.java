package cl.trackthor.repository;

import cl.trackthor.model.Plan;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "planes", collectionResourceRel = "planes")
public interface PlanRepository extends CrudRepository<Plan, Long> {
    
    @Override
    public List<Plan> findAll();
    
    @RestResource(path = "page", rel = "plan")
    public Page<Plan> findBy(Pageable pageable);

}
