import { getProductInfo } from '@/lib/apiProducts';
import Image from 'next/image';

interface Props {
  params: Promise<{ id: string }>;
}
const Page = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getProductInfo(id);

  return (
    <div>
      <ul>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <Image src={product.img} alt={product.name} width={200} height={200} />
        <p>{product.category}</p>
        <p>{product.size}</p>
      </ul>
    </div>
  );
};

export default Page;
