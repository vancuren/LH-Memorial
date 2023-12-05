import { binding } from "cf-bindings-proxy";
import { Blob, R2Bucket, ReadableStream } from "@cloudflare/workers-types";

export async function getBucketData<T>(key: string, defaultValue: T[] = []) {
  "use server";
  // Get all the videos from the Cloudflare R2 API
  const vcgMemorialBucket = binding<R2Bucket>("vcg-memorial-bucket");

  const fileContents = await vcgMemorialBucket.get(key);

  // If there are no videos, return an empty array
  if (!fileContents) return defaultValue;

  // Return the videos array
  return JSON.parse(await fileContents.text()) as T[];
}

export async function appendBucketData<T>(key: string, newData: T) {
  // Get all the data from the R2 API
  const vcgMemorialBucket = binding<R2Bucket>("vcg-memorial-bucket");
  const data = await vcgMemorialBucket.get(key);

  // Add the new data to the array
  const newArray = [...JSON.parse((await data?.text()) ?? "[]"), newData];

  // Save the new videos array to the R2 store
  await vcgMemorialBucket.put(key, JSON.stringify(newArray));
}

export async function writeBucketData<T>(
  key: string,
  value: ReadableStream | ArrayBuffer | ArrayBufferView | string | null | Blob,
) {
  const vcgMemorialBucket = binding<R2Bucket>("vcg-memorial-bucket");
  await vcgMemorialBucket.put(key, value);
}

export async function deleteBucketData(key: string) {
  const vcgMemorialBucket = binding<R2Bucket>("vcg-memorial-bucket");
  await vcgMemorialBucket.delete(key);
}

export async function getRawBucketData<T>(key: string) {
  const vcgMemorialBucket = binding<R2Bucket>("vcg-memorial-bucket");
  return await vcgMemorialBucket.get(key);
}
