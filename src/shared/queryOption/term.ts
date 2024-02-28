import { FigkOptionModel, GenericResponse } from "model/common";
import { TermDetailResponse, TermVersionModel } from "model/term";

export const returnTermVersionOption = {
  select: (res: GenericResponse): FigkOptionModel[] => {
    const version: TermVersionModel[] = res.data.list;

    return version.map((v) => ({ value: v.id, option: v.version }));
  },
  refetchOnWindowFocus: false,
  retry: 0,
};

export const returnTermOption = {
  select: (res: GenericResponse): TermDetailResponse => {
    return res.data;
  },
  refetchOnWindowFocus: false,
  retry: 0,
};
