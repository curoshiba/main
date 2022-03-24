const createDate = () => {
  const ymd = new Date();
  const yyyy = ymd.getFullYear();
  const M = ymd.getMonth() + 1;
  const dd = ymd.getDate();
  const hh = ymd.getHours();
  const mm = ymd.getMinutes();
  const concatYMD = `${yyyy}/${M}/${dd} ${hh}:${mm}`;
  return concatYMD;
};

export default createDate;
