import { groq } from "next-sanity";

export const topProjectsQuery = groq`*[_type == "project"]{
  _id,
  title,
  description,
  featureDoc,
  images[]{
    "url": asset->url,
    alt
  },
  links {
    live,
    github
  },
  technologies,
  order
} | order(order asc)[0...4]`;

export const allProjectsQuery = groq`*[_type == "project"]{
  _id,
  title,
  description,
  featureDoc,
  images[]{
    "url": asset->url,
    alt
  },
  links {
    live,
    github
  },
  technologies,
  order
} | order(order asc)`;