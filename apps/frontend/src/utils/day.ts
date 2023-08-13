import dayjs from 'dayjs';

dayjs().format();

export const formatDate = {
  /**
   * 日本時間を YYYY/MM/DD  の形式で日付を返す
   */
  toDateWithTime(date: string): string {
    return dayjs(date).format('YYYY/MM/DD HH:mm');
  },
};