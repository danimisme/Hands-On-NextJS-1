import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  return (
    <div>
      <h1>Detail product : {router.query.productName}</h1>
    </div>
  );
}
