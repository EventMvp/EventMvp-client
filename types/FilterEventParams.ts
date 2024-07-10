export interface FiltersEventParams {
  categoryId: number | null;
  startDate: string | null;
  endDate: string | null;
  isFree: boolean | null;
  page: number;
  size: number;
}
