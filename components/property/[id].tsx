import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <p>Loading: {loading ? "yes" : "no"}</p>
    </div>
  );
}
