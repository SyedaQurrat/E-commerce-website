// pages/shop/[id]/reviews.tsx
import { useRouter } from 'next/router';

const ReviewsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Reviews for Product ID: {id}</h1>
      {/* Add reviews logic here */}
    </div>
  );
};

export default ReviewsPage;
