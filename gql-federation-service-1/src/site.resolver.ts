import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { SiteService } from './site.service';
import { Site } from './site.type';

@Resolver((of) => Site)
export class SiteResolvers {
  constructor(private siteService: SiteService) {}

  @Query((returns) => Site)
  siteById(@Args('id') id: number): Site {
    return this.siteService.findById(id);
  }

  @Query((returns) => [Site])
  sites(): Site[] {
    return this.siteService.findAll();
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Site {
    return this.siteService.findById(reference.id);
  }
}
