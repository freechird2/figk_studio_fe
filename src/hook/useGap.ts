import useWidth, { BPTypes } from "./useWidth";

const useGap = () => {
  const { media } = useWidth();
  const gap = () => {
    const pageTitle = media.tablet ? "30px" : "40px";
    const votingReminder = media.tablet ? "40px" : "70px";
    const listWithPagination = media.mobile ? "24px" : "40px";
    return {
      pageTitle,
      votingReminder,
      listWithPagination,
    };
  };

  const calcGap = (
    /** useWidth()훅의 media key값 */
    key: keyof BPTypes,
    /** media key값에 TRUE일때 */
    T: string,
    /** media key값에 FALSE일때 */
    F: string
  ) => {
    return media[key] ? T : F;
  };
  return { gap, calcGap };
};

export default useGap;
