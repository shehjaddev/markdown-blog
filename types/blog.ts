export interface BlogMeta {
  title: string;
  date: string;
}

export interface BlogData extends BlogMeta {
  slug: string;
  contentHtml: string;
}