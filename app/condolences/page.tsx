import { R2Bucket } from "@cloudflare/workers-types";
import { revalidatePath } from "next/cache";
import { binding } from "cf-bindings-proxy";

export const runtime = "edge";

export default async function Condolences() {
  const getCondolences = async () => {
    // Get all the condolences from the Cloudflare R2 API
    const memorialBucket = binding<R2Bucket>("memorialBucket");

    const condolences = await memorialBucket.get("condolences");

    // If there are no condolences, return an empty array
    if (!condolences) return [];

    // Return the condolences array
    return JSON.parse(await condolences.text());
  };

  const onSubmit = async (formData: FormData) => {
    // On the server, save the condolence to the R2 store and return the updated condolences array
    "use server";
    // Get all the condolences from the R2 API
    const memorialBucket = binding<R2Bucket>("memorialBucket");

    // Get all the condolences from the R2 store
    const condolences = await memorialBucket.get("condolences");

    // Get the new condolence from the request body
    const newCondolence = {
      name: formData.get("name"),
      message: formData.get("message"),
      createdAt: new Date().toISOString(),
    };

    // Add the new condolence to the condolences array
    const newCondolences = [
      ...JSON.parse((await condolences?.text()) ?? "[]"),
      newCondolence,
    ];

    // Save the new condolences array to the R2 store
    await memorialBucket.put("condolences", JSON.stringify(newCondolences));

    // Revalidate the condolences page
    revalidatePath("/condolences");
  };

  const data = await getCondolences();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Condolences</h1>
        <p className="mt-3 text-2xl">Leave a message of condolences</p>
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
