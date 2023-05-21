import { useSelector } from 'react-redux';

const useServiceList = () => {
  const items = useSelector((state) => state.servicesList);
  return { items };
};

export default useServiceList;
