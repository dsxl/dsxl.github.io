import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft);
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/posts/${post.id}/`,
      })),
  });
}
