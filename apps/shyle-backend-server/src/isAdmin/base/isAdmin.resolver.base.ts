/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { IsAdmin } from "./IsAdmin";
import { IsAdminCountArgs } from "./IsAdminCountArgs";
import { IsAdminFindManyArgs } from "./IsAdminFindManyArgs";
import { IsAdminFindUniqueArgs } from "./IsAdminFindUniqueArgs";
import { DeleteIsAdminArgs } from "./DeleteIsAdminArgs";
import { IsAdminService } from "../isAdmin.service";
@graphql.Resolver(() => IsAdmin)
export class IsAdminResolverBase {
  constructor(protected readonly service: IsAdminService) {}

  async _isAdminsMeta(
    @graphql.Args() args: IsAdminCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IsAdmin])
  async isAdmins(
    @graphql.Args() args: IsAdminFindManyArgs
  ): Promise<IsAdmin[]> {
    return this.service.isAdmins(args);
  }

  @graphql.Query(() => IsAdmin, { nullable: true })
  async isAdmin(
    @graphql.Args() args: IsAdminFindUniqueArgs
  ): Promise<IsAdmin | null> {
    const result = await this.service.isAdmin(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IsAdmin)
  async deleteIsAdmin(
    @graphql.Args() args: DeleteIsAdminArgs
  ): Promise<IsAdmin | null> {
    try {
      return await this.service.deleteIsAdmin(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
