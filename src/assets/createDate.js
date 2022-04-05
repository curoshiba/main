const createDate = () => {
  const ymd = new Date();
  const yyyy = ymd.getFullYear();
  const M = ymd.getMonth() + 1;
  const dd = ymd.getDate();
  const hh = ymd.getHours();
  const mm = ymd.getMinutes();
  const concatYMD = `${yyyy}/${M}/${dd} ${hh}:${mm}`;
  return { full: concatYMD, y: yyyy, m: M, d: dd, h: hh, mm: mm };
};

export default createDate;
