import React from "react";
import useSlideController from "./hooks/useSlideController";
import SlideViewer from "./components/slide/SlideViewer";
import SlideControls from "./components/slide/SlideControls";
import SlideList from "./components/slide/SlideList";
import SpeakerNotes from "./components/slide/SpeakerNotes";
import SidebarTabs from "./components/sidebar/SidebarTabs";
import Footer from "./components/layout/Footer";

export default function App() {
  const {
    slides,
    currentSlide,
    setCurrentSlide,
    notes,
    onNoteChange,
    onNext,
    onPrev,
  } = useSlideController();

  return (
    <div className="h-screen bg-gray-100">
      <div className="grid h-full min-h-0 grid-cols-[1fr_300px] gap-0">
        <div className="relative grid h-full min-h-0 grid-cols-[2fr_224px] grid-rows-[minmax(0,1fr)_80px_auto] overflow-hidden rounded-l-lg bg-white shadow">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col items-center overflow-hidden bg-gray-50 px-8 pt-6">
            <div className="flex w-full flex-1 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
              <SlideViewer slide={slides[currentSlide]} />
            </div>

            <div className="mt-4">
              <SlideControls
                current={currentSlide}
                total={slides.length}
                onPrev={onPrev}
                onNext={onNext}
              />
            </div>
          </div>

          <div className="relative z-20 col-start-2 col-end-3 row-start-1 row-end-3 min-h-0">
            <SlideList
              slides={slides}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
          </div>

          <div className="col-start-1 col-end-3 row-start-2 row-end-3 overflow-hidden border-t border-gray-200 p-4">
            <SpeakerNotes
              value={notes[currentSlide] || ""}
              onChange={onNoteChange}
            />
          </div>

          <div className="relative z-30 col-start-1 col-end-3 row-start-3 row-end-4">
            <Footer />
          </div>
        </div>

        <div className="h-full min-h-0 overflow-hidden rounded-r-lg border-l border-gray-200 bg-white shadow">
          <SidebarTabs />
        </div>
      </div>
    </div>
  );
}
