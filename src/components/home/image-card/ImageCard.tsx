import {
  AlignLeft,
  ClipboardPenLine,
  FolderOpen,
  Heart,
  Pin,
} from "lucide-react";
import {
  Button,
  Skeleton,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui";

const ImageCard = () => {
  return (
    <div className="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
      <div className="relative flex flex-col gap-3">
        {/* TODO: Dialog 컴포넌트로 분리 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size={"icon"}
              className="absolute top-2 right-4 z-10 bg-neutral-500 bg-opacity-50 hover:bg-opacity-0"
            >
              <FolderOpen className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>이미지 상세 정보</DialogTitle>
              <DialogDescription>
                선택한 이미지의 상세 정보를 확인하세요.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center space-x-2 gap-3">
              <Skeleton className="w-full h-80 rounded-xl" />
              <div className="w-full flex items-center justify-start">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <small className="text-sm font-medium leading-none">
                    ChaCha
                  </small>
                </div>
              </div>
              {/* Atoms 분리 */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center">
                  <Pin className="w-4 h-4 mt-[2px] mr-4" />
                  <span className="text-sm"> 등대-근처-한인-주택-JrUPDate</span>
                </div>
                <div className="flex items-center">
                  <ClipboardPenLine className="w-4 h-4 mt-[2px] mr-4" />
                  <span className="text-sm"> 등대-근처-한인-주택-JrUPDate</span>
                </div>
                <div className="flex items-center">
                  <AlignLeft className="w-4 h-4 mt-[2px] mr-4" />
                  <span className="text-sm"> 등대-근처-한인-주택-JrUPDate</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-end gap-4">
                <div className="flex items-center gap-1 text-sm">
                  <p className="leading-7">게시일:</p>
                  2024-03-14
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Heart
                    className="h-[14px] w-[14px] mt-[2x] text-rose-600"
                    fill="#e11d48"
                  />
                  1,333
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

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
