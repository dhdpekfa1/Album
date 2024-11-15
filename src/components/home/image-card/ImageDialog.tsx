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
import { IconWithText } from "@/components/atoms";

const ImageDialog = () => {
  return (
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
              <small className="text-sm font-medium leading-none">ChaCha</small>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <IconWithText Icon={Pin} text="등대-근처-한인-주택-JrUPDate" />
            <IconWithText Icon={ClipboardPenLine} text="요건 어떤지.." />
            <IconWithText Icon={AlignLeft} text="메모메모메모메뉴메모..." />
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
  );
};

export { ImageDialog };
