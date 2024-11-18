import {
  AlignLeft,
  BookMarked,
  ClipboardPenLine,
  FolderOpen,
  Heart,
  Pin,
} from "lucide-react";
import {
  Button,
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
import { ImageCardProps, ImageCardType } from "@/types/home";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const ImageDialog = ({ data, mode }: ImageCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // 북마크 확인 함수
  const checkIfBookmarked = (): boolean => {
    const existingBookmarks: ImageCardType[] = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    return existingBookmarks.some((bookmark) => bookmark.id === data.id);
  };

  // 북마크 여부 확인
  useEffect(() => {
    setIsBookmarked(checkIfBookmarked());
  }, [data.id]);

  const addBookmark = () => {
    if (!isBookmarked) {
      const existingBookmarks: ImageCardType[] = JSON.parse(
        localStorage.getItem("bookmarks") || "[]"
      );
      const updatedBookmarks = [...existingBookmarks, data];
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIsBookmarked(true);
      toast({
        title: "저장 성공",
        description: "북마크에 추가했습니다.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "저장 실패",
        description: "이미 북마크에 추가된 항목입니다.",
      });
    }
  };

  const removeBookmark = () => {
    const existingBookmarks: ImageCardType[] = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    const updatedBookmarks = existingBookmarks.filter(
      (bookmark) => bookmark.id !== data.id
    );
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setIsBookmarked(false);
    toast({
      title: "삭제 성공",
      description: "북마크에서 제거했습니다.",
    });
  };

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
          <img
            src={data.urls.full}
            alt="이미지"
            className="w-full h-80 rounded-xl"
          />
          <div className="w-full flex items-center justify-start">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={data.user.profile_image.small}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <small className="text-sm font-medium leading-none">
                {data.user.username}
              </small>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <IconWithText Icon={Pin} text={data.alternative_slugs.ko} />
            <IconWithText Icon={ClipboardPenLine} text={data.alt_description} />
            <IconWithText
              Icon={AlignLeft}
              text={
                data.description
                  ? data.description
                  : "등록된 설명글이 없습니다."
              }
            />
          </div>

          <div className="w-full flex items-center justify-end gap-4">
            <div className="flex items-center gap-1 text-sm">
              <p className="leading-7">게시일:</p>
              {data.created_at.split("T")[0]}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Heart
                className="h-[14px] w-[14px] mt-[2x] text-rose-600"
                fill="#e11d48"
              />
              {data.likes
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>
        {/* 북마크 추가 버튼 */}
        {mode === "home" ? (
          <Button
            variant={"secondary"}
            onClick={addBookmark}
            disabled={isBookmarked}
          >
            <BookMarked />
            {isBookmarked ? "이미 추가됨" : "북마크 추가"}
          </Button>
        ) : (
          <Button variant={"destructive"} onClick={removeBookmark}>
            <BookMarked />
            북마크 삭제
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { ImageDialog };
