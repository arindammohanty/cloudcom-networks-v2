"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { tourAudioPlayer, soundFx } from "@/lib/audioTour";

export interface TourStep {
  id: string;
  title: string;
  category: string;
  targetSelector: string;
  preferredPosition?: "top" | "bottom" | "left" | "right";
  narration: string;
  audioSrc: string;
  highlights: string[];
  pageUrl: string;
  pageName: string;
}

export const TOUR_STEPS: TourStep[] = [
  {
    id: "subpage-solutions",
    title: "Solutions Overview",
    category: "Sub-Page: /solutions",
    targetSelector: '[data-tour-nav="solutions"]',
    preferredPosition: "bottom",
    narration: "Explore our Solutions portfolio. We provide sovereign enterprise cloud, unified communications, zero-trust cybersecurity, and AI-enabled automation built on open standards.",
    audioSrc: "/media/tour/step-1-solutions.mp3",
    highlights: ["Enterprise Cloud", "Unified Communications", "Cybersecurity", "AI & Automation"],
    pageUrl: "/solutions",
    pageName: "Solutions Portfolio",
  },
  {
    id: "subpage-services",
    title: "Services & Implementation",
    category: "Sub-Page: /services",
    targetSelector: '[data-tour-nav="services"]',
    preferredPosition: "bottom",
    narration: "Our Services team helps you navigate the entire engineering lifecycle—from strategic architecture and cloud migration to 24/7 proactive managed operations.",
    audioSrc: "/media/tour/step-2-services.mp3",
    highlights: ["Advisory & Architecture", "Cloud Migration", "24/7 Managed Ops", "Security Assessments"],
    pageUrl: "/services",
    pageName: "Services & Operations",
  },
  {
    id: "subpage-industries",
    title: "Industry Verticals",
    category: "Sub-Page: /industries",
    targetSelector: '[data-tour-nav="industries"]',
    preferredPosition: "bottom",
    narration: "See how we tailor digital infrastructure for specialized sectors, including government agencies, healthcare networks, financial markets, and education.",
    audioSrc: "/media/tour/step-3-industries.mp3",
    highlights: ["Government & Defense", "Healthcare Networks", "Financial Markets", "Education & Enterprise"],
    pageUrl: "/industries",
    pageName: "Industry Verticals",
  },
  {
    id: "subpage-support",
    title: "Support & Engagement Hub",
    category: "Sub-Pages: /support & /contact",
    targetSelector: '[data-tour-nav="support-contact"]',
    preferredPosition: "bottom",
    narration: "Need assistance or ready to get started? Access our 24/7 SLA Support Portal, explore our knowledge base, or connect directly with our principal architects.",
    audioSrc: "/media/tour/step-4-support.mp3",
    highlights: ["24/7 SLA Support Portal", "Knowledge Base & Status", "Talk to an Architect", "APAC & India Hubs"],
    pageUrl: "/contact",
    pageName: "Support & Contact",
  },
];

interface TourContextType {
  isOpen: boolean;
  currentStepIndex: number;
  currentStep: TourStep;
  totalSteps: number;
  isPlaying: boolean;
  isMuted: boolean;
  showCaptions: boolean;
  currentCaption: string;
  audioProgress: number;
  speechRate: number;
  autoAdvance: boolean;
  startTour: (stepIndex?: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (index: number) => void;
  endTour: () => void;
  togglePlayPause: () => void;
  toggleMute: () => void;
  toggleCaptions: () => void;
  toggleAutoAdvance: () => void;
  setSpeechRate: (rate: number) => void;
  replayStepAudio: () => void;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export function TourProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [currentCaption, setCurrentCaption] = useState("");
  const [audioProgress, setAudioProgress] = useState(0);
  const [speechRate, setSpeechRateState] = useState(1.0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentStep = TOUR_STEPS[currentStepIndex] || TOUR_STEPS[0];

  // Helper to scroll target into view smoothly
  const scrollToTarget = useCallback((selector: string) => {
    if (typeof window === "undefined") return;
    setTimeout(() => {
      const el = document.querySelector(selector);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  }, []);

  // Play pre-recorded studio audio for a specific step
  const playStepAudio = useCallback(
    (step: TourStep, rate: number, muted: boolean) => {
      setCurrentCaption(step.narration);
      setAudioProgress(0);

      if (muted) {
        tourAudioPlayer.stop();
        setIsPlaying(false);
        return;
      }

      setIsPlaying(true);
      soundFx.play("step");

      tourAudioPlayer.playFile(step.audioSrc, {
        rate,
        volume: 1.0,
        onStart: () => {
          setIsPlaying(true);
        },
        onTimeUpdate: (curr, dur) => {
          setAudioProgress(dur > 0 ? (curr / dur) * 100 : 0);
        },
        onEnded: () => {
          setIsPlaying(false);
          setAudioProgress(100);

          if (autoAdvance) {
            autoAdvanceTimerRef.current = setTimeout(() => {
              setCurrentStepIndex((prev) => {
                if (prev < TOUR_STEPS.length - 1) {
                  return prev + 1;
                } else {
                  soundFx.play("complete");
                  return prev;
                }
              });
            }, 1200);
          }
        },
        onError: () => {
          setIsPlaying(false);
        },
      });
    },
    [autoAdvance]
  );

  // Handle step changes
  useEffect(() => {
    if (!isOpen) {
      tourAudioPlayer.stop();
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
      return;
    }

    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }

    const step = TOUR_STEPS[currentStepIndex];
    if (step) {
      scrollToTarget(step.targetSelector);
      playStepAudio(step, speechRate, isMuted);
    }
  }, [isOpen, currentStepIndex, scrollToTarget, playStepAudio, speechRate, isMuted]);

  const startTour = useCallback((stepIndex = 0) => {
    setIsOpen(true);
    setCurrentStepIndex(stepIndex);
    soundFx.play("open");
  }, []);

  const endTour = useCallback(() => {
    setIsOpen(false);
    tourAudioPlayer.stop();
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
  }, []);

  const nextStep = useCallback(() => {
    soundFx.play("click");
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    if (currentStepIndex < TOUR_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      soundFx.play("complete");
      endTour();
    }
  }, [currentStepIndex, endTour]);

  const prevStep = useCallback(() => {
    soundFx.play("click");
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  }, [currentStepIndex]);

  const goToStep = useCallback((index: number) => {
    soundFx.play("click");
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    if (index >= 0 && index < TOUR_STEPS.length) {
      setCurrentStepIndex(index);
    }
  }, []);

  const togglePlayPause = useCallback(() => {
    soundFx.play("click");
    if (isPlaying) {
      tourAudioPlayer.pause();
      setIsPlaying(false);
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    } else {
      if (isMuted) {
        setIsMuted(false);
      }
      tourAudioPlayer.resume();
      setIsPlaying(true);
    }
  }, [isPlaying, isMuted]);

  const toggleMute = useCallback(() => {
    soundFx.play("click");
    setIsMuted((prev) => {
      const next = !prev;
      if (next) {
        tourAudioPlayer.stop();
        setIsPlaying(false);
      } else {
        playStepAudio(currentStep, speechRate, false);
      }
      return next;
    });
  }, [currentStep, speechRate, playStepAudio]);

  const toggleCaptions = useCallback(() => {
    soundFx.play("click");
    setShowCaptions((prev) => !prev);
  }, []);

  const toggleAutoAdvance = useCallback(() => {
    soundFx.play("click");
    setAutoAdvance((prev) => !prev);
  }, []);

  const setSpeechRate = useCallback(
    (rate: number) => {
      soundFx.play("click");
      setSpeechRateState(rate);
      tourAudioPlayer.setRate(rate);
    },
    []
  );

  const replayStepAudio = useCallback(() => {
    soundFx.play("click");
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    tourAudioPlayer.stop();
    playStepAudio(currentStep, speechRate, false);
    setIsMuted(false);
  }, [currentStep, speechRate, playStepAudio]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        endTour();
      } else if (e.key === "ArrowRight") {
        nextStep();
      } else if (e.key === "ArrowLeft") {
        prevStep();
      } else if (e.key === " " && (e.target as HTMLElement).tagName !== "BUTTON") {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextStep, prevStep, endTour, togglePlayPause]);

  return (
    <TourContext.Provider
      value={{
        isOpen,
        currentStepIndex,
        currentStep,
        totalSteps: TOUR_STEPS.length,
        isPlaying,
        isMuted,
        showCaptions,
        currentCaption,
        audioProgress,
        speechRate,
        autoAdvance,
        startTour,
        nextStep,
        prevStep,
        goToStep,
        endTour,
        togglePlayPause,
        toggleMute,
        toggleCaptions,
        toggleAutoAdvance,
        setSpeechRate,
        replayStepAudio,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export function useTour() {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTour must be used within a TourProvider");
  }
  return context;
}
