interface CalcWPM {
  text: string;
  startTime: number | null;
  endTime: number | null;
}

const calculateWPM = ({ endTime, startTime, text }: CalcWPM) => {
  if (startTime && endTime) {
    const minutes = (endTime - startTime) / 60000;
    const words = text.trim().split(/\s+/).length;
    return Math.round(words / minutes);
  }
  return 0;
};

export default calculateWPM;
