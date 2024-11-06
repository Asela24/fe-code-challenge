import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import { useGetCardClassName } from '@/hooks/useGetCardClassName';
import SymbolCardContent from '../SymbolCardContent/SymbolCardContent';
import SymbolCardHeader from '../SymbolCardHeader/SymbolCardHeader';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap, showCardInfo } = useAppSelector((state) => ({
    ...state.stocks.entities[id],
    showCardInfo: state.store.showCardInfo
  }));

  const handleOnClick = () => {
    onClick(id);
  };

  const formattedPrice = Math.round(price);
  const { className, onAnimationEnds } = useGetCardClassName(id, formattedPrice);

  return (
    <div onClick={handleOnClick} className={className} onAnimationEnd={onAnimationEnds}>
      <SymbolCardHeader id={id} trend={trend} />

      <SymbolCardContent
        showCardInfo={showCardInfo}
        price={formattedPrice}
        companyName={companyName}
        industry={industry}
        marketCap={marketCap}
      />
    </div>
  );
};
export default SymbolCard;
