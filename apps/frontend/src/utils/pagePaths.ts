export const pagePaths = {
  /**
   * ブログの詳細ページ
   * @param id
   */
  blogDetail(id: string): string {
    return `/blogs/${id}`;
  },

  /**
   * ラベルの詳細ページ
   * @param id
   */
  labelDetail(id: string): string {
    return `/labels/${id}`;
  },

  /**
   * 新規追加
   */
  newPost(): string {
    return '/create';
  },
};