import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { eq, desc } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublished(): Promise<PostModel[]> {
    const query = drizzleDb.select().from(postsTable);

    query.where(eq(postsTable.published, true));
    query.orderBy(desc(postsTable.createdAt));

    const result = await query;
    return result;
  }

  async findAll(): Promise<PostModel[]> {
    const query = drizzleDb.select().from(postsTable);
    query.orderBy(desc(postsTable.createdAt));

    const result = await query;
    return result;
  }

  async findById(id: string): Promise<PostModel> {
    const query = drizzleDb.select().from(postsTable);
    query.where(eq(postsTable.id, id));

    const result = await query;

    return result[0];
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const query = drizzleDb.select().from(postsTable);
    query.where(eq(postsTable.slug, slug));

    const result = await query;

    return result[0];
  }
}
