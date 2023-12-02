import { R2Bucket } from "@cloudflare/workers-types";
import { revalidatePath } from "next/cache";
import { binding } from "cf-bindings-proxy";

export const runtime = "edge";

export default async function Memories() {
  const getMemories = async () => {
    // Get all the memories from the Cloudflare R2 API
    const memorialBucket = binding<R2Bucket>("memorialBucket");

    const memories = await memorialBucket.get("memories");

    // If there are no memories, return an empty array
    if (!memories) return [];

    // Return the memories array
    return JSON.parse(await memories.text());
  };

  const onSubmit = async (formData: FormData) => {
    // On the server, save the condolence to the R2 store and return the updated memories array
    "use server";
    // Get all the memories from the R2 API
    const memorialBucket = binding<R2Bucket>("memorialBucket");

    // Get all the memories from the R2 store
    const memories = await memorialBucket.get("memories");

    // Get the new condolence from the request body
    const newMemory = {
      name: formData.get("name"),
      message: formData.get("message"),
      createdAt: new Date().toISOString(),
    };

    // Add the new condolence to the memories array
    const newMemories = [
      ...JSON.parse((await memories?.text()) ?? "[]"),
      newMemory,
    ];

    // Save the new memories array to the R2 store
    await memorialBucket.put("memories", JSON.stringify(newMemories));

    // Revalidate the memories page
    revalidatePath("/memories");
  };

  const data = await getMemories();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Memories</h1>
        <p className="mt-3 text-2xl">Leave a memory</p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <form
            className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"
            action={onSubmit}
          >
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline mb-4"
              name="name"
              type="text"
              placeholder="Name"
            />
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline mb-4"
              name="message"
              placeholder="Message"
            />
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-6 sm:w-full text-left whitespace-pre-line">
          {data?.map(
            ({
              name,
              message,
              createdAt,
            }: {
              name: string;
              message: string;
              createdAt: string;
            }) => (
              <div
                key={name + createdAt}
                className="border-2 border-gray-700 rounded-lg p-4"
              >
                <p className="">{message}</p>
                <p className="text-sm text-center">
                  - {name} {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            ),
          )}
        </div>
      </main>
    </div>
  );
}
