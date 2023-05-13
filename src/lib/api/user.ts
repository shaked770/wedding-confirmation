import clientPromise from "@/lib/mongodb";
import { Person } from "@/types";

export async function getUser(userId: string): Promise<Person | null> {
  const client = await clientPromise;
  const collection = client.db("wedding-confirmation").collection("users");
  return collection.findOne<Person>({ id: userId }, { projection: { _id: 0 } });
}
