import { Heart } from "lucide-react";
import { Skeleton } from "@/components/ui";
import { ImageDialog } from "@/components/home";

const ImageCard = () => {
  return (
    <div className="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
      <div className="relative flex flex-col gap-3">
        <ImageDialog />

        <Skeleton className="w-[250px] h-[150px] rounded-xl" />
        <small className="w-full text-sm font-medium line-clamp-2">
          조회한 이미지의 설명란 조회한 이미지의 설명란 조회한 이미지의 설명란
          조회한 이미지의 설명란 조회한 이미지의 설명란 조회한 이미지의 설명란
        </small>
      </div>

      {/* description */}
      <div className="space-y-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1 text-sm">
            <span className="leading-7">게시일: </span>
            2024-03-14
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Heart
              className="h-[14px] w-[14px] mb-[2px] text-rose-600"
              fill="#e11d48"
            />
            1,333
          </div>
        </div>
      </div>
    </div>
  );
};

export { ImageCard };
