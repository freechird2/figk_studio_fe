export type FigkStatusType = "elected" | "failed" | "unsent" | "sending";

//TextFigk genneral Types
export interface TextFigkModel {
  authorId: number;
  authorName: string;
  content: string;
  id: number;
  isPublished: string;
  link: string;
  publishStatus: string;
  registeredAt: string;
  status: string;
  subTitle: string;
  tag: TagModel[];
  title: string;
  updatedAt: string;
  week: number;
}

export interface TagModel {
  id: number;
  name: string;
}

export interface GenericResponse {
  code: number;
  message: string;
  data?: any;
}

export interface GenericList {
  isLast: boolean;
  totalCount: number;
}

export interface NoticeResponse {
  content: string;
  id: number;
  publishedAt: string;
  title: string;
}

export interface PaginationRequest {
  per: number;
  page: number;
}

export interface HomeTextFigkFilterOption extends PaginationRequest {
  endDate: string | null;
  startDate: string | null;
  word: string;
  status: string | null;
}

export interface VoteFilterOption extends PaginationRequest {
  word: string;
  status: string | null;
  week: number | null;
}

export interface NoticeFilterOption extends PaginationRequest {}

export interface PeriodState {
  isOpen: boolean;
  startDate: string;
  endDate: string;
  placeholder: boolean;
  startDateObj: Date | null | undefined;
  endDateObj: Date | null | undefined;
}

export interface FigkOptionModel {
  value: any;
  option: any;
  placeholder?: boolean;
}
