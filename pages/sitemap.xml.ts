import { GetServerSideProps } from "next";
import slugify from "utils/slugify";

type Data = {
  slugs: (string | string[])[];
  tags: string[];
  categories: (string | string[])[];
};

const generateSiteMap = ({ slugs, categories, tags }: Data) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/categories</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/tags</loc>
      </url>
      ${categories
        .map((category) => {
          return `
        <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/categories/${category}</loc>
        </url>
      `;
        })
        .join("")}
      ${tags
        .map((tag) => {
          return `
        <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/tags/${tag}</loc>
        </url>
      `;
        })
        .join("")}
      
      ${slugs
        .map((slug) => {
          return `
        <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/posts/${slug}</loc>
        </url>
      `;
        })
        .join("")}
   </urlset>
 `;
};

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}



export default SiteMap;
