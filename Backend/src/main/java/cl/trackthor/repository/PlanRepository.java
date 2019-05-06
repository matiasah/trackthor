package cl.trackthor.repository;

import cl.trackthor.model.Plan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PlanRepository extends PagingAndSortingRepository<Plan, Long> {

    @Override
    public Page<Plan> findAll(Pageable pageable);

}
