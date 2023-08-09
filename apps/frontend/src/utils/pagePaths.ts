export const pagePaths = {
  /**
   * ブログの詳細ページ
   * @param id
   */
  blogDetail(id: string): string {
    return `/blogs/${id}`;
  },

  /**
   * Topicsの詳細ページ
   * @param tagName
   */
  labelDetail(tagName: string): string {
    return `/tags/${tagName}`;
  },

  /**
   * 新規追加
   */
  newPost(): string {
    return '/create';
  },
};