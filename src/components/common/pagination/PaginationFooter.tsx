import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui";
import { useEffect, useState } from "react";

interface Props {
  totalPages: number;
  currentPage: number;
  handlePage: (page: number) => void;
}

function PaginationFooter({ totalPages, currentPage, handlePage }: Props) {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    setPages([...Array.from({ length: totalPages }, (_, idx) => idx + 1)]);
  }, [totalPages]);

  const renderPaginationItems = () => {
    const visiblePages = 5;
    const pageNumbers: number[] = [];

    /** TODO: switch 문 변경 */
    if (totalPages <= visiblePages) {
      return pages;
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(...pages.slice(0, visiblePages));

        if (totalPages > visiblePages) {
          pageNumbers.push(totalPages);
        }
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push(...pages.slice(totalPages - visiblePages));
      } else {
        pageNumbers.push(1);
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push(totalPages);
      }
    }

    const uniquePageNumbers = Array.from(new Set(pageNumbers));

    // Ellipsis를 추가할 구간을 넣기 위한 작업
    const finalPages: (number | string)[] = [];
    uniquePageNumbers.forEach((page, index, arr) => {
      finalPages.push(page);

      if (index < arr.length - 1 && arr[index + 1] > page + 1) {
        finalPages.push("...");
      }
    });

    return finalPages;
  };

  const visiblePages = renderPaginationItems();

  const onPrev = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage > 1) handlePage(currentPage - 1);
  };

  const onNext = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage < totalPages) handlePage(currentPage + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={onPrev}
            disabled={currentPage <= 1}
          />
        </PaginationItem>

        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={`page-${page}`}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={() => handlePage(Number(page))}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={onNext}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export { PaginationFooter };
