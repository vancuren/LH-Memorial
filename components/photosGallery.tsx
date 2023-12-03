"use client";
import { Gallery, Item } from "react-photoswipe-gallery";

export function PhotosGallery({ data }: { data: any }) {
  return (
    <Gallery>
      {data.map((photoEntry: any) => (
        <Item
          key={photoEntry.imageId + photoEntry.createdAt}
          original={"/api/img/" + photoEntry.imageId}
          thumbnail={"/api/img/" + photoEntry.imageId}
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={photoEntry.description}
              ref={ref}
              onClick={open}
              src={"/api/img/" + photoEntry.imageId}
              width={200}
              height={200}
              className="object-cover"
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
}
