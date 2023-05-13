import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  const [user, setUser] = useState<Person | null>();

  useEffect(() => {
    if ("0" !== userId) {
      fetch(`/api/user?userId=${userId}`).then(async (res) => {
        const user = await res.json();
        setUser(user);
      });
    }
  }, [userId, setUser]);

  return user;
}
