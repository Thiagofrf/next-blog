import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { eq, desc } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublished(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      where: eq(postsTable.published, true),
      orderBy: desc(postsTable.createdAt),
    });

    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: eq(postsTable.id, id),
    });

    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: eq(postsTable.slug, slug),
    });

    if (!post) {
      throw new Error(`Post with slug ${slug} not found`);
    }

    return post;
  }
}
