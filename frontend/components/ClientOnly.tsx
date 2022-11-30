import { useEffect, useState } from "react";

export default function ClientOnly({
  children,
  ...delegated
}: {
  children: any;
}) {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
