export default (...hocs: any[]) => (BaseComponent: any) => {
  return hocs.reduceRight((a, b) => b(a), BaseComponent);
};
