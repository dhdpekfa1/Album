import { Heart } from "lucide-react";
// import { Skeleton } from "@/components/ui";
import { ImageDialog } from "@/components/home";
import { ImageCardProps } from "@/types/home";

const ImageCard = ({ data, mode }: ImageCardProps) => {
  return (
    <div className="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
      <div className="relative flex flex-col gap-3">
        <ImageDialog data={data} mode={mode} />

        {/* <Skeleton className="w-[250px] h-[150px] rounded-xl" /> */}
        <img
          src={data.urls.small}
          alt={data.alt_description}
          className="w-[250px] h-[150px] rounded-xl object-cover"
        />
        <small className="w-full text-sm font-medium line-clamp-2">
          {data.description ? data.description : "등록된 설명글이 없습니다."}
        </small>
      </div>

      {/* description */}
      <div className="space-y-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1 text-sm">
            <span className="leading-7">게시일: </span>
            {data.created_at.split("T")[0]}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Heart
              className="h-[14px] w-[14px] mb-[2px] text-rose-600"
              fill="#e11d48"
            />
            {data.likes
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ImageCard };
