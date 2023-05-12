import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { getUser } from "@/pages/api/userService";
import { Person } from "@/types";

export function useGetUserId() {
  const {
    query: { userId: queryUserId },
  } = useRouter();
  const [userId, setUserId] = useState("0");

  useEffect(() => {
    setUserId(localStorage.getItem("userId") as string);
  }, []);

  useEffect(() => {
    if (
      !!queryUserId &&
      typeof queryUserId === "string" &&
      queryUserId !== ""
    ) {
      setUserId(queryUserId);
      localStorage.setItem("userId", queryUserId);
    }
  }, [queryUserId]);

  return userId;
}

export function useGetUser() {
  const userId = useGetUserId();
  const [user, setUser] = useState<Person>();

  useEffect(() => {
    if ("0" !== userId) {
      getUser(userId).then((fetchedUser) => setUser(fetchedUser));
    }
  }, [userId, setUser]);

  return user;
}
