import { useEffect, useState } from "react";
import { slides } from "../data/slides";

export default function useSlideController() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notes, setNotes] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("speakerNotes");
    if (stored) setNotes(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("speakerNotes", JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (text) => {
    setNotes((prev) => ({ ...prev, [currentSlide]: text }));
  };

  const next = () => setCurrentSlide((s) => Math.min(slides.length - 1, s + 1));
  const prev = () => setCurrentSlide((s) => Math.max(0, s - 1));

  return {
    slides,
    currentSlide,
    setCurrentSlide,
    notes,
    onNoteChange: handleNoteChange,
    onNext: next,
    onPrev: prev,
  };
}
