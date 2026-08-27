"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { tourAudioPlayer, soundFx } from "@/lib/audioTour";

export type TourLanguage = 'en' | 'hi' | 'or';

export interface TourStep {
  id: string;
  title: string;
  category: string;
  targetSelector: string;
  preferredPosition?: "top" | "bottom" | "left" | "right";
  narration: string;
  audioSrc?: string; // Optional for fallback
  highlights: string[];
  pageUrl: string;
  pageName: string;
}

const TOUR_STEPS_BY_LANG: Record<TourLanguage, TourStep[]> = {
  en: [
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
  ],
  hi: [
    {
      id: "subpage-solutions",
      title: "समाधान अवलोकन",
      category: "सब-पेज: /solutions",
      targetSelector: '[data-tour-nav="solutions"]',
      preferredPosition: "bottom",
      narration: "हमारे समाधान पोर्टफोलियो को एक्सप्लोर करें। हम खुले मानकों पर निर्मित सॉवरेन एंटरप्राइज़ क्लाउड, एकीकृत संचार, ज़ीरो-ट्रस्ट साइबर सुरक्षा, और एआई-सक्षम स्वचालन प्रदान करते हैं।",
      audioSrc: "/media/tour/hi/step-1-solutions.mp3",
      highlights: ["एंटरप्राइज़ क्लाउड", "एकीकृत संचार", "साइबर सुरक्षा", "एआई और स्वचालन"],
      pageUrl: "/solutions",
      pageName: "समाधान पोर्टफोलियो",
    },
    {
      id: "subpage-services",
      title: "सेवाएं और कार्यान्वयन",
      category: "सब-पेज: /services",
      targetSelector: '[data-tour-nav="services"]',
      preferredPosition: "bottom",
      narration: "हमारी सेवा टीम पूरे इंजीनियरिंग जीवनचक्र को नेविगेट करने में आपकी मदद करती है - रणनीतिक वास्तुकला और क्लाउड माइग्रेशन से लेकर 24/7 सक्रिय प्रबंधित संचालन तक।",
      audioSrc: "/media/tour/hi/step-2-services.mp3",
      highlights: ["सलाह और वास्तुकला", "क्लाउड माइग्रेशन", "24/7 प्रबंधित संचालन", "सुरक्षा आकलन"],
      pageUrl: "/services",
      pageName: "सेवाएं और संचालन",
    },
    {
      id: "subpage-industries",
      title: "उद्योग वर्टिकल",
      category: "सब-पेज: /industries",
      targetSelector: '[data-tour-nav="industries"]',
      preferredPosition: "bottom",
      narration: "देखें कि हम सरकारी एजेंसियों, स्वास्थ्य सेवा नेटवर्क, वित्तीय बाजारों और शिक्षा सहित विशिष्ट क्षेत्रों के लिए डिजिटल बुनियादी ढांचे को कैसे तैयार करते हैं।",
      audioSrc: "/media/tour/hi/step-3-industries.mp3",
      highlights: ["सरकार और रक्षा", "स्वास्थ्य सेवा नेटवर्क", "वित्तीय बाजार", "शिक्षा और उद्यम"],
      pageUrl: "/industries",
      pageName: "उद्योग वर्टिकल",
    },
    {
      id: "subpage-support",
      title: "समर्थन और जुड़ाव हब",
      category: "सब-पेज: /support & /contact",
      targetSelector: '[data-tour-nav="support-contact"]',
      preferredPosition: "bottom",
      narration: "क्या आपको सहायता की आवश्यकता है या शुरू करने के लिए तैयार हैं? हमारे 24/7 SLA सपोर्ट पोर्टल तक पहुँचें, हमारे ज्ञानकोष का अन्वेषण करें, या सीधे हमारे प्रमुख आर्किटेक्ट्स से जुड़ें।",
      audioSrc: "/media/tour/hi/step-4-support.mp3",
      highlights: ["24/7 SLA सपोर्ट पोर्टल", "ज्ञानकोष और स्थिति", "आर्किटेक्ट से बात करें", "APAC और भारत हब"],
      pageUrl: "/contact",
      pageName: "समर्थन और संपर्क",
    },
  ],
  or: [
    {
      id: "subpage-solutions",
      title: "ସମାଧାନର ସମୀକ୍ଷା",
      category: "ସବ୍-ପୃଷ୍ଠା: /solutions",
      targetSelector: '[data-tour-nav="solutions"]',
      preferredPosition: "bottom",
      narration: "ଆମର ସମାଧାନ ପୋର୍ଟଫୋଲିଓ ଅନୁସନ୍ଧାନ କରନ୍ତୁ। ଆମେ ଖୋଲା ମାନକ ଉପରେ ନିର୍ମିତ ସାର୍ବଭୌମ ଏଣ୍ଟରପ୍ରାଇଜ୍ କ୍ଲାଉଡ୍, ୟୁନିଫାଇଡ୍ ଯୋଗାଯୋଗ, ଜିରୋ-ଟ୍ରଷ୍ଟ ସାଇବର ସୁରକ୍ଷା ଏବଂ ଏଆଇ-ସକ୍ଷମ ଅଟୋମେସନ୍ ପ୍ରଦାନ କରୁ।",
      audioSrc: "/media/tour/or/step-1-solutions.mp3",
      highlights: ["ଏଣ୍ଟରପ୍ରାଇଜ୍ କ୍ଲାଉଡ୍", "ୟୁନିଫାଇଡ୍ ଯୋଗାଯୋଗ", "ସାଇବର ସୁରକ୍ଷା", "ଏଆଇ ଏବଂ ଅଟୋମେସନ୍"],
      pageUrl: "/solutions",
      pageName: "ସମାଧାନ ପୋର୍ଟଫୋଲିଓ",
    },
    {
      id: "subpage-services",
      title: "ସେବା ଏବଂ କାର୍ଯ୍ୟାନ୍ୱୟନ",
      category: "ସବ୍-ପୃଷ୍ଠା: /services",
      targetSelector: '[data-tour-nav="services"]',
      preferredPosition: "bottom",
      narration: "ଆମର ସେବା ଦଳ ଆପଣଙ୍କୁ ସମଗ୍ର ଇଞ୍ଜିନିୟରିଂ ଲାଇଫସାଇକେଲ୍ ନେଭିଗେଟ୍ କରିବାରେ ସାହାଯ୍ୟ କରେ - ରଣନୀତିକ ସ୍ଥାପତ୍ୟ ଏବଂ କ୍ଲାଉଡ୍ ମାଇଗ୍ରେସନ୍ ଠାରୁ ଆରମ୍ଭ କରି ୨୪/୭ ସକ୍ରିୟ ପରିଚାଳିତ କାର୍ଯ୍ୟକଳାପ ପର୍ଯ୍ୟନ୍ତ।",
      audioSrc: "/media/tour/or/step-2-services.mp3",
      highlights: ["ପରାମର୍ଶ ଏବଂ ସ୍ଥାପତ୍ୟ", "କ୍ଲାଉଡ୍ ମାଇଗ୍ରେସନ୍", "୨୪/୭ ପରିଚାଳିତ କାର୍ଯ୍ୟ", "ସୁରକ୍ଷା ମୂଲ୍ୟାଙ୍କନ"],
      pageUrl: "/services",
      pageName: "ସେବା ଏବଂ ସଞ୍ଚାଳନ",
    },
    {
      id: "subpage-industries",
      title: "ଶିଳ୍ପ ଭର୍ଟିକାଲ୍",
      category: "ସବ୍-ପୃଷ୍ଠା: /industries",
      targetSelector: '[data-tour-nav="industries"]',
      preferredPosition: "bottom",
      narration: "ସରକାରୀ ଏଜେନ୍ସି, ସ୍ୱାସ୍ଥ୍ୟସେବା ନେଟୱାର୍କ, ଆର୍ଥିକ ବଜାର ଏବଂ ଶିକ୍ଷା ସହିତ ବିଶେଷ କ୍ଷେତ୍ରଗୁଡିକ ପାଇଁ ଆମେ କିପରି ଡିଜିଟାଲ୍ ଭିତ୍ତିଭୂମି ପ୍ରସ୍ତୁତ କରୁ ତାହା ଦେଖନ୍ତୁ।",
      audioSrc: "/media/tour/or/step-3-industries.mp3",
      highlights: ["ସରକାର ଏବଂ ପ୍ରତିରକ୍ଷା", "ସ୍ୱାସ୍ଥ୍ୟସେବା ନେଟୱାର୍କ", "ଆର୍ଥିକ ବଜାର", "ଶିକ୍ଷା ଏବଂ ଉଦ୍ୟୋଗ"],
      pageUrl: "/industries",
      pageName: "ଶିଳ୍ପ ଭର୍ଟିକାଲ୍",
    },
    {
      id: "subpage-support",
      title: "ସମର୍ଥନ ଏବଂ ଯୋଗାଯୋଗ ହବ୍",
      category: "ସବ୍-ପୃଷ୍ଠା: /support & /contact",
      targetSelector: '[data-tour-nav="support-contact"]',
      preferredPosition: "bottom",
      narration: "ସହାୟତା ଆବଶ୍ୟକ କିମ୍ବା ଆରମ୍ଭ କରିବାକୁ ପ୍ରସ୍ତୁତ କି? ଆମର ୨୪/୭ ଏସଏଲଏ ସପୋର୍ଟ ପୋର୍ଟାଲ୍ ଆକ୍ସେସ୍ କରନ୍ତୁ, ଆମର ଜ୍ଞାନକୋଷ ଅନୁସନ୍ଧାନ କରନ୍ତୁ କିମ୍ବା ସିଧାସଳଖ ଆମର ପ୍ରମୁଖ ଆର୍କିଟେକ୍ଟମାନଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
      audioSrc: "/media/tour/or/step-4-support.mp3",
      highlights: ["୨୪/୭ ଏସଏଲଏ ସପୋର୍ଟ ପୋର୍ଟାଲ୍", "ଜ୍ଞାନକୋଷ ଏବଂ ସ୍ଥିତି", "ଆର୍କିଟେକ୍ଟ ସହିତ କଥା ହୁଅନ୍ତୁ", "APAC ଏବଂ ଭାରତ ହବ୍"],
      pageUrl: "/contact",
      pageName: "ସମର୍ଥନ ଏବଂ ସମ୍ପର୍କ",
    },
  ],
};

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
  tourLanguage: TourLanguage;
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
  setTourLanguage: (lang: TourLanguage) => void;
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
  const [tourLanguage, setTourLanguageState] = useState<TourLanguage>('en');

  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  const TOUR_STEPS = TOUR_STEPS_BY_LANG[tourLanguage];
  const currentStep = TOUR_STEPS[currentStepIndex] || TOUR_STEPS[0];

  const setTourLanguage = useCallback((lang: TourLanguage) => {
    setTourLanguageState(lang);
    // When language changes, the current step will be re-played automatically 
    // due to the useEffect on currentStep / isMuted
  }, []);

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
      
      if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
      tourAudioPlayer.stop();

      if (muted || !step.audioSrc) {
        setIsPlaying(false);
        // Fallback for Odia or Muted: We simulate progress over 7 seconds
        if (!muted && !step.audioSrc) {
            // No audio available for this language, but not muted. Just be silent but progress
            setIsPlaying(true);
        }
        
        let progress = 0;
        const duration = 8000; // 8 seconds fallback
        const interval = 100;
        
        fallbackTimerRef.current = setInterval(() => {
            progress += (interval / duration) * 100;
            if (progress >= 100) {
                progress = 100;
                setAudioProgress(100);
                if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
                setIsPlaying(false);
                
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
            } else {
                setAudioProgress(progress);
            }
        }, interval);
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
    [autoAdvance, TOUR_STEPS.length]
  );

  // Handle step changes or language changes
  useEffect(() => {
    if (!isOpen) {
      tourAudioPlayer.stop();
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
      if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
      return;
    }

    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }
    if (fallbackTimerRef.current) {
        clearInterval(fallbackTimerRef.current);
    }

    const step = TOUR_STEPS[currentStepIndex];
    if (step) {
      scrollToTarget(step.targetSelector);
      playStepAudio(step, speechRate, isMuted);
    }
  }, [isOpen, currentStepIndex, tourLanguage, scrollToTarget, playStepAudio, speechRate, isMuted, TOUR_STEPS]);

  const startTour = useCallback((stepIndex = 0) => {
    setIsOpen(true);
    setCurrentStepIndex(stepIndex);
    soundFx.play("open");
  }, []);

  const endTour = useCallback(() => {
    setIsOpen(false);
    tourAudioPlayer.stop();
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
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
  }, [currentStepIndex, endTour, TOUR_STEPS.length]);

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
  }, [TOUR_STEPS.length]);

  const togglePlayPause = useCallback(() => {
    soundFx.play("click");
    if (isPlaying) {
      tourAudioPlayer.pause();
      setIsPlaying(false);
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
      if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
    } else {
      if (isMuted) {
        setIsMuted(false);
      } else {
        if (currentStep.audioSrc) {
          tourAudioPlayer.resume();
          setIsPlaying(true);
        } else {
          // Restart fallback progress if it was paused. We will just replay for simplicity
          playStepAudio(currentStep, speechRate, false);
        }
      }
    }
  }, [isPlaying, isMuted, currentStep, speechRate, playStepAudio]);

  const toggleMute = useCallback(() => {
    soundFx.play("click");
    setIsMuted((prev) => {
      const next = !prev;
      if (next) {
        tourAudioPlayer.stop();
        if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
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
    if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
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
        tourLanguage,
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
        setTourLanguage,
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
