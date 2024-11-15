import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { BookMarked } from "lucide-react";
import { Avatar, AvatarImage, Button, Separator } from "@/components/ui";
import { AvatarFallback } from "@radix-ui/react-avatar";

const Header = () => {
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
        </Link>
      </div>

      <div className={styles[`header__user-wrapper`]}>
        {/* 북마크 버튼 */}
        <Link to={"/bookmark"}>
          <Button variant={"secondary"}>
            <BookMarked />
            북마크
          </Button>
        </Link>
        <Separator orientation="vertical" className="h-10" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-1">
          {/* 유저 정보 */}
          <small className="text-sm font-medium leading-none">coramdeo</small>
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
