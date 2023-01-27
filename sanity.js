import SanityClient from "@sanity/client";
import imageUrlBulder from "@sanity/image-url";
const client = SanityClient({
    projectId: "gdtoecgr",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})
const builder = imageUrlBulder(client);
export const urlFor = (source) => builder.image(source);
export default client;
