"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  RotateCcw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const TOTAL_PAGES = 96;
const MIN_ZOOM = 75;
const MAX_ZOOM = 200;
const ZOOM_STEP = 25;

const getManifestoPageUrl = (page) => {
  const pageNumber = String(page).padStart(4, "0");

  return `/Manifesto/TVK_MANIFESTO_2026_2_page-${pageNumber}.jpg`;
};

export default function ManifestoViewer() {
  const manifestoPages = useMemo(
    () =>
      Array.from({ length: TOTAL_PAGES }, (_, index) =>
        getManifestoPageUrl(index + 1),
      ),
    [],
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(100);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === manifestoPages.length - 1;
  const canZoomOut = zoom > MIN_ZOOM;
  const canZoomIn = zoom < MAX_ZOOM;

  const goToPage = useCallback(
    (pageIndex) => {
      setCurrentPage(
        Math.min(Math.max(pageIndex, 0), manifestoPages.length - 1),
      );
    },
    [manifestoPages.length],
  );

  const handlePrevious = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const handleNext = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const handleZoomOut = useCallback(() => {
    setZoom((currentZoom) => Math.max(currentZoom - ZOOM_STEP, MIN_ZOOM));
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoom((currentZoom) => Math.min(currentZoom + ZOOM_STEP, MAX_ZOOM));
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoom(100);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }

      if ((event.ctrlKey || event.metaKey) && event.key === "-") {
        event.preventDefault();
        handleZoomOut();
      }

      if ((event.ctrlKey || event.metaKey) && ["+", "="].includes(event.key)) {
        event.preventDefault();
        handleZoomIn();
      }

      if ((event.ctrlKey || event.metaKey) && event.key === "0") {
        event.preventDefault();
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    handleNext,
    handlePrevious,
    handleResetZoom,
    handleZoomIn,
    handleZoomOut,
  ]);

  return (
    <section className="min-h-screen overflow-hidden bg-black px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
            TVK Official Manifesto 2026
          </p>

          <h1 className="mb-5 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Election Manifesto
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Browse the complete manifesto document page by page.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={isFirstPage}
            className={`flex h-12 items-center justify-center gap-2 rounded-lg px-4 font-bold transition ${
              isFirstPage
                ? "cursor-not-allowed bg-white/5 text-white/30"
                : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <ChevronLeft aria-hidden="true" size={20} />
            Previous
          </button>

          <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between gap-4 text-sm font-semibold sm:text-base">
              <span>
                Page {currentPage + 1}
                <span className="mx-2 text-white/50">/</span>
                {manifestoPages.length}
              </span>

              <a
                href="/Manifesto/tvk-manifesto.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-3 py-2 text-sm font-bold text-black transition hover:bg-yellow-300"
              >
                <Download aria-hidden="true" size={16} />
                PDF
              </a>
            </div>

            <input
              type="range"
              min="1"
              max={manifestoPages.length}
              value={currentPage + 1}
              onChange={(event) => goToPage(Number(event.target.value) - 1)}
              aria-label="Select manifesto page"
              className="w-full accent-yellow-400"
            />
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={isLastPage}
            className={`flex h-12 items-center justify-center gap-2 rounded-lg px-4 font-bold transition ${
              isLastPage
                ? "cursor-not-allowed bg-white/5 text-white/30"
                : "bg-yellow-400 text-black hover:bg-yellow-300"
            }`}
          >
            Next
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={!canZoomOut}
            className={`flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition ${
              canZoomOut
                ? "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "cursor-not-allowed bg-white/5 text-white/30"
            }`}
          >
            <ZoomOut aria-hidden="true" size={18} />
            Zoom Out
          </button>

          <div className="flex h-11 min-w-24 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-bold text-white">
            {zoom}%
          </div>

          <button
            type="button"
            onClick={handleZoomIn}
            disabled={!canZoomIn}
            className={`flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition ${
              canZoomIn
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "cursor-not-allowed bg-white/5 text-white/30"
            }`}
          >
            <ZoomIn aria-hidden="true" size={18} />
            Zoom In
          </button>

          <button
            type="button"
            onClick={handleResetZoom}
            disabled={zoom === 100}
            className={`flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition ${
              zoom === 100
                ? "cursor-not-allowed bg-white/5 text-white/30"
                : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <RotateCcw aria-hidden="true" size={18} />
            Reset
          </button>
        </div>

        <div className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-black/30 shadow-2xl">
          <div className="h-[72vh] min-h-[420px] w-full overflow-auto sm:h-[80vh]">
            <Image
              src={manifestoPages[currentPage]}
              alt={`Manifesto page ${currentPage + 1}`}
              width={1200}
              height={1697}
              priority={currentPage === 0}
              sizes="(max-width: 768px) 100vw, 1280px"
              className="mx-auto h-auto py-4 transition-[width] duration-200"
              style={{
                maxWidth: "none",
                width: `${zoom}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
