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
   * @param name
   */
  labelDetail(name: string): string {
    return `/topics/${name}`;
  },

  /**
   * 新規追加
   */
  newPost(): string {
    return '/create';
  },
};