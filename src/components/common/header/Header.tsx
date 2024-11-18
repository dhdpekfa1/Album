import { Link } from "react-router-dom";
import { BookMarked, TrashIcon } from "lucide-react";
import { Avatar, AvatarImage, Button, Separator } from "@/components/ui";
import { AvatarFallback } from "@radix-ui/react-avatar";
import styles from "./header.module.scss";
import { toast } from "@/hooks/use-toast";

const Header = ({ mode }: { mode: "home" | "bookmark" }) => {
  // 북마크 삭제 함수
  const removeAllBookmark = () => {
    // 북마크 초기화
    localStorage.removeItem("bookmarks");

    // 상태 동기화를 위한 이벤트 발생
    window.dispatchEvent(new Event("bookmarkUpdated"));

    toast({
      title: "삭제 성공",
      description: "모든 북마크를 삭제했습니다.",
    });
  };

  return (
    <header className={styles.header}>
      {/* logo */}
      <div className={styles[`header__logo-wrapper`]}>
        <Link to={"/"} className={styles[`header__logo-wrapper__logo`]}>
          <img
            src="src/assets/logo.svg"
            alt="logo-image"
            width={36}
            height={36}
          />
          <h2 className="ml-2 text-lg text-cyan-950 font-bold leading-none">
            Image Search
          </h2>
        </Link>
      </div>

      <div className={styles[`header__user-wrapper`]}>
        {/* 북마크 버튼 */}
        {mode === "home" ? (
          <Link to={"/bookmark"}>
            <Button variant={"secondary"}>
              <BookMarked />
              북마크
            </Button>
          </Link>
        ) : (
          <Button variant={"destructive"} onClick={removeAllBookmark}>
            <TrashIcon />
            전체 삭제
          </Button>
        )}
        <Separator orientation="vertical" className="h-10" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-1">
          {/* 유저 정보 */}
          <small className="text-sm font-medium leading-none">ollin</small>
          &middot;
          <small className="text-sm font-medium leading-none">
            dhdpekfa1@daum.net
          </small>
        </div>
      </div>
    </header>
  );
};

export { Header };
