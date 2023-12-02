import { R2Bucket } from "@cloudflare/workers-types";
import { revalidatePath } from "next/cache";
import { binding } from "cf-bindings-proxy";
import { YoutubeEmbed } from "@/components/youtubeEmbed";

export const runtime = "edge";

interface VideoData {
  name: string;
  link: string;
  year: string;
  createdAt: string;
}

export default async function Videos() {
  const getVideos = async () => {
    // Get all the videos from the Cloudflare R2 API
    const memorialBucket = binding<R2Bucket>("memorialBucket");

    const videos = await memorialBucket.get("videos");

    // If there are no videos, return an empty array
    if (!videos) return [];

    // Return the videos array
    return JSON.parse(await videos.text()) as VideoData[];
  };

  const onSubmit = async (formData: FormData) => {
    // On the server, save the condolence to the R2 store and return the updated videos array
    "use server";
    // Get all the videos from the R2 API
    const memorialBucket = binding<R2Bucket>("memorialBucket");

    // Get all the videos from the R2 store
    const videos = await memorialBucket.get("videos");

    // Get the new condolence from the request body
    const newVideo: VideoData = {
      name: formData.get("name") as string,
      link: formData.get("link") as string,
      year: formData.get("year") as string,
      createdAt: new Date().toISOString(),
    };

    // Add the new condolence to the videos array
    const newVideos = [...JSON.parse((await videos?.text()) ?? "[]"), newVideo];

    // Save the new videos array to the R2 store
    await memorialBucket.put("videos", JSON.stringify(newVideos));

    // Revalidate the videos page
    revalidatePath("/videos");
  };

  const data = await getVideos();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Videos</h1>
        <p className="mt-3 text-2xl">Link a video for others to see</p>
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
              htmlFor="link"
            >
              YouTube Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline mb-4"
              name="link"
              type="url"
              placeholder="Link"
            />
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="link"
            >
              Video Year
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline mb-4"
              name="year"
              type="text"
              placeholder="Year"
            />
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-6 sm:w-full text-left">
          {data
            ?.sort(
              (a, b) =>
                // filter by year (descending)
                parseInt(b.year) - parseInt(a.year) ||
                // filter by name
                a.name.localeCompare(b.name) ||
                // filter by createdAt
                new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime(),
            )
            .filter((video) => video.link)
            .filter((video) => video.year)
            .filter((video) => video.name)
            ?.map(({ name, link, createdAt }) => (
              <div
                key={name + createdAt}
                className="border-2 border-gray-700 rounded-lg p-4"
              >
                <div className="w-full flex place-content-center">
                  <YoutubeEmbed url={link} />
                </div>
                <p className="text-sm text-center mt-4">
                  - {name} {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
