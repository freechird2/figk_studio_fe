export type RequestLoginModel = {
  email: string;
  password: string;
  isForever?: boolean;
};

export type UserLoginModel = {
  access: string;
  currentGroup: string;
  email?: string;
  id?: string;
  isApprove: string;
  isTempPassword: string;
  nickname?: string;
  name?: string;
  processStatus: string;
  refresh: string;
  status?: "Y" | "N" | "W";
  textFigkWeek: number;
  type: 0 | 1;
  groupName: string;
};
export type LoginTypes = {
  email: string;
  password: string;
};

export type FindPasswordTypes = {
  email: string;
  phone: string;
  name: string;
};
export type ChangePasswordTypes = {
  password: string;
  newPassword: string;
  newPasswordValid: string;
};
