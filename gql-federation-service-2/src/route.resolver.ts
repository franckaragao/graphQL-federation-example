import { Query, Args, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { Site } from './site.type';
import { Route } from './route.type';
import { RouteService } from './route.service';

@Resolver((of) => Route)
export class RouteResolvers {
  constructor(private readonly routeService: RouteService) {}

  @Query((returns) => Route)
  routeById(@Args('id') id: number): Route {
    return this.routeService.findById(id);
  }

  @Query((returns) => [Route])
  routes(): Route[] {
    return this.routeService.findAll();
  }

  @ResolveField((of) => Site)
  siteA(@Parent() route: Route): any {
    return { __typename: 'Site', id: route.idSiteA };
  }

  @ResolveField((of) => Site)
  siteB(@Parent() route: Route): any {
    return { __typename: 'Site', id: route.idSiteB };
  }
}
