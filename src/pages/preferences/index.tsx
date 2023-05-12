import { useGetUser } from "@/hooks";
import Link from "next/link";

export default function Preferences() {
  const user = useGetUser();
  if (!user) return <></>;

  return (
    <div>
      allergies page <Link href={"/"}>Back</Link>
    </div>
  );
}
