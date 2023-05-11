import Link from "next/link";
import { useRouter } from "next/router";
import { getUser } from "@/pages/api/userService";

export default function Confirmation() {
  const router = useRouter();
  const { userId } = router.query;
  const user = getUser((userId as string) ?? "1"); // TODO: add fallback for nonexistant id or wrong id
  if (!user) return <></>;

  return (
    <ul>
      <li>This is confirmation</li>
      <li>
        <Link href={`/?userId=${userId}`}> get back</Link>
      </li>
    </ul>
  );
  // TODO get options
  // TODO save options to server
  // TODO return to main page if there are preferences,navigate to preferences if there are
}
