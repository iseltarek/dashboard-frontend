import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, Button, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";

export function PaginationControl({
  totalItems,
  itemsPerPage = 5,
  currentPage,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageCount = Math.ceil(totalPages / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
    }
  };
  return (
    <HStack justify="center" mt={4}>
      <Button onClick={handlePrev} borderRadius="50%" isDisabled={currentPage === 1}>
        <Icon as={ChevronLeftIcon} w={5} h={5} />
      </Button>
      <Text fontSize="sm">
        Page {currentPage} of {pageCount}
      </Text>
      <Button onClick={handleNext} borderRadius="50%" isDisabled={currentPage === totalPages}>
        <Icon as={ChevronRightIcon} w={5} h={5} />
      </Button>
    </HStack>
  );
}
