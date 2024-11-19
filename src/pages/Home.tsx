import { useEffect, useState, useCallback } from "react";
import { ImageCardType } from "@/types/home";
import { Header, Nav, PaginationFooter } from "@/components/common";
import { ImageCard } from "@/components/home";
import { SearchBar } from "@/components/ui";
import { useToast } from "@/hooks/use-toast";
import { getDataApi, pageAtom, searchValueAtom } from "@/store";
import { useAtom } from "jotai";

const HomePage = () => {
  const { toast } = useToast();
  const [page, setPage] = useAtom(pageAtom);
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const [images, setImages] = useState([]);

  const fetchImagesData = useCallback(async () => {
    try {
      const res = await getDataApi(searchValue, page);
      if (res && res.status === 200 && res.data) {
        setImages(res.data.results);
      }
    } catch (err) {
      console.error(err);
    }
  }, [searchValue, page, toast]);

  // 검색창에서 엔터 키 입력 시 검색 실행
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchValue("");
      fetchImagesData(); // API 호출
    }
  };

  // 검색창의 값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    fetchImagesData();
  }, [fetchImagesData]);

  return (
    <div className="page">
      <div className="page__container">
        <Header mode="home" />
        <Nav />
        {/* 상단 배너 */}
        <div className="page__container__wallpaper">
          <img
            src="src/assets/images/wallpaper.png"
            alt="bg-image"
            className="bg-image"
          />
          <div className="search-box">
            <h1 className="scroll-m-20 text-4xl text-white font-extrabold tracking-tight">
              프로젝트 02: 오픈 API를 활용한 이미지 검색 사이트 만들기
            </h1>
            <div className="flex flex-col w-full mt-5 mb-2">
              <h4 className="scroll-m-20 text-md text-white font-semibold tracking-tight">
                인터넷 시각자료 출처입니다.
              </h4>
              <h4 className="scroll-m-20 text-md text-white font-semibold tracking-tight">
                모든 지역에 있는 크리에이터들의 지원을 받습니다.
              </h4>
            </div>
            <SearchBar
              placeholder="원하는 이미지를 검색하세요."
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="mt-4"
            />
          </div>
        </div>

        {/* 메인 */}
        <div className="page__container__contents">
          {images.map((img: ImageCardType) => {
            return <ImageCard data={img} key={img.id} mode="home" />;
          })}
        </div>
      </div>

      <PaginationFooter
        totalPages={344}
        currentPage={page}
        handlePage={setPage}
      />
    </div>
  );
};

export default HomePage;
