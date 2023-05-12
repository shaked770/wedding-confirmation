import Link from "next/link";
import { useGetUser } from "@/hooks";

export default function Confirmation() {
  const user = useGetUser();
  if (!user) return <></>;

  return (
    <ul>
      <li>This is confirmation</li>
      <li>
        <Link href={"/"}> get back</Link>
      </li>
    </ul>
  );
  // TODO get options
  // TODO save options to server
  // TODO return to main page if there are preferences,navigate to preferences if there are
}
