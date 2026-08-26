"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTour } from "@/context/TourContext";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  X,
  Subtitles,
  Sparkles,
  CheckCircle2,
  Compass,
  ArrowRight,
  ExternalLink,
  FastForward,
} from "lucide-react";

export function WebsiteTour() {
  const {
    isOpen,
    currentStepIndex,
    currentStep,
    totalSteps,
    isPlaying,
    isMuted,
    showCaptions,
    currentCaption,
    audioProgress,
    speechRate,
    autoAdvance,
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
  } = useTour();

  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number; position: string }>({
    top: 0,
    left: 0,
    position: "bottom",
  });
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Recalculate target element position
  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      const el = document.querySelector(currentStep.targetSelector);
      if (el) {
        const rect = el.getBoundingClientRect();
        setTargetRect(rect);

        const padding = 16;
        const tooltipWidth = 440;
        const tooltipHeight = 330;

        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        let top = 0;
        let left = Math.max(16, Math.min(window.innerWidth - tooltipWidth - 16, rect.left + rect.width / 2 - tooltipWidth / 2));
        let position = "bottom";

        if (currentStep.preferredPosition === "top" && spaceAbove > tooltipHeight + padding) {
          top = Math.max(16, rect.top - tooltipHeight - padding);
          position = "top";
        } else if (spaceBelow > tooltipHeight + padding) {
          top = rect.bottom + padding;
          position = "bottom";
        } else if (spaceAbove > tooltipHeight + padding) {
          top = Math.max(16, rect.top - tooltipHeight - padding);
          position = "top";
        } else {
          top = Math.max(16, window.innerHeight / 2 - tooltipHeight / 2);
          left = Math.max(16, window.innerWidth / 2 - tooltipWidth / 2);
          position = "center";
        }

        setTooltipPos({ top, left, position });
      } else {
        setTargetRect(null);
        setTooltipPos({
          top: 90,
          left: Math.max(16, window.innerWidth / 2 - 220),
          position: "top-center",
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    const timer = setTimeout(updatePosition, 300);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      clearTimeout(timer);
    };
  }, [isOpen, currentStepIndex, currentStep]);

  if (!isOpen) return null;

  const isLastStep = currentStepIndex === totalSteps - 1;
  const isFirstStep = currentStepIndex === 0;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden">
        {/* Spotlight SVG Mask Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-500">
          <defs>
            <mask id="tour-spotlight-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              {targetRect && (
                <rect
                  x={Math.max(0, targetRect.left - 8)}
                  y={Math.max(0, targetRect.top - 8)}
                  width={targetRect.width + 16}
                  height={targetRect.height + 16}
                  rx="14"
                  fill="black"
                  className="transition-all duration-500 ease-out"
                />
              )}
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="rgba(2, 27, 75, 0.76)"
            mask="url(#tour-spotlight-mask)"
            className="backdrop-blur-[2.5px] transition-opacity duration-300"
          />
        </svg>

        {/* Animated Glowing Spotlight Rings around the target nav element */}
        {targetRect && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            style={{
              top: Math.max(0, targetRect.top - 8),
              left: Math.max(0, targetRect.left - 8),
              width: targetRect.width + 16,
              height: targetRect.height + 16,
            }}
            className="absolute rounded-2xl border-2 border-sky-400/90 shadow-[0_0_30px_rgba(14,165,233,0.45)] pointer-events-none transition-all duration-500 ease-out z-[10000]"
          >
            {/* Glowing Corner Accents */}
            <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white rounded-tl"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white rounded-tr"></span>
            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white rounded-bl"></span>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white rounded-br"></span>

            {/* Radar Pulsing Aura */}
            <span className="absolute inset-0 rounded-2xl border border-sky-300 animate-ping opacity-30 pointer-events-none"></span>
          </motion.div>
        )}

        {/* Main Floating Tooltip Card */}
        <motion.div
          ref={tooltipRef}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            top: `${tooltipPos.top}px`,
            left: `${tooltipPos.left}px`,
            maxWidth: "460px",
            width: "calc(100vw - 32px)",
          }}
          className="fixed z-[10001] bg-white/95 backdrop-blur-xl rounded-3xl border border-blue-100 shadow-[0_20px_60px_-15px_rgba(2,27,75,0.35)] overflow-hidden"
        >
          {/* Top Audio Progress Bar */}
          <div className="h-1 bg-slate-100 w-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cloud-blue to-sky-400 transition-all duration-100"
              style={{ width: `${audioProgress}%` }}
            />
          </div>

          {/* Header Strip */}
          <div className="bg-gradient-to-r from-dark-navy via-slate-900 to-dark-navy p-4 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cloud-blue/30 text-sky-300 border border-sky-400/40 flex items-center justify-center flex-shrink-0">
                <Compass className="w-4 h-4 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-800">
                    Step {currentStepIndex + 1} of {totalSteps}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 truncate max-w-[170px]">
                    {currentStep.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Voice Equalizer Animation Indicator */}
            <div className="flex items-center gap-2">
              {isPlaying && !isMuted && (
                <div className="flex items-end gap-0.5 h-4 px-2 py-0.5 bg-blue-900/60 rounded-md border border-blue-700/50">
                  <span className="w-1 bg-sky-400 rounded-full animate-[bounce_0.8s_infinite]"></span>
                  <span className="w-1 bg-sky-300 rounded-full animate-[bounce_1.1s_infinite_0.2s]"></span>
                  <span className="w-1 bg-emerald-400 rounded-full animate-[bounce_0.9s_infinite_0.4s]"></span>
                  <span className="w-1 bg-sky-400 rounded-full animate-[bounce_1.2s_infinite_0.1s]"></span>
                </div>
              )}

              <button
                onClick={endTour}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Exit Tour (Esc)"
                aria-label="Close Tour"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-dark-navy">
                {currentStep.title}
              </h3>
              <Link
                href={currentStep.pageUrl}
                onClick={endTour}
                className="text-[11px] font-bold text-cloud-blue hover:text-cloud-blue-hover hover:underline inline-flex items-center gap-1 flex-shrink-0 mt-1"
                title={`Open ${currentStep.pageName}`}
              >
                Open Page <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-light">
              {currentStep.narration}
            </p>

            {/* Feature Pills */}
            {currentStep.highlights && currentStep.highlights.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {currentStep.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold bg-blue-50/90 text-cloud-blue border border-blue-200/80 px-2.5 py-1 rounded-lg"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cloud-blue" />
                    {h}
                  </span>
                ))}
              </div>
            )}

            {/* Studio Audio Player Toolbar */}
            <div className="bg-slate-50 rounded-2xl p-2.5 border border-slate-200/80 mb-4 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={togglePlayPause}
                  className="p-2 rounded-xl bg-cloud-blue hover:bg-cloud-blue-hover text-white transition-colors cursor-pointer shadow-xs"
                  title={isPlaying ? "Pause Studio Audio" : "Play Studio Audio"}
                  aria-label="Play or pause audio narration"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={replayStepAudio}
                  className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
                  title="Replay Audio"
                  aria-label="Replay audio"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={toggleMute}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    isMuted
                      ? "bg-rose-50 border-rose-200 text-rose-600"
                      : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                  title={isMuted ? "Unmute Audio" : "Mute Audio"}
                  aria-label="Toggle mute"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => setSpeechRate(speechRate === 1.0 ? 1.25 : speechRate === 1.25 ? 1.5 : 1.0)}
                  className="px-2.5 py-1 text-xs font-mono font-bold rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
                  title="Audio Playback Speed"
                >
                  {speechRate}x
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Auto Advance Switch */}
                <button
                  onClick={toggleAutoAdvance}
                  className={`flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    autoAdvance
                      ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                      : "bg-white border-slate-200 text-slate-500"
                  }`}
                  title={autoAdvance ? "Auto-advance enabled" : "Auto-advance paused"}
                >
                  <FastForward className="w-3 h-3" />
                  <span>Auto</span>
                </button>

                {/* Captions Toggle */}
                <button
                  onClick={toggleCaptions}
                  className={`flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    showCaptions
                      ? "bg-blue-50 border-blue-200 text-cloud-blue"
                      : "bg-white border-slate-200 text-slate-400"
                  }`}
                  title="Toggle Live Captions"
                >
                  <Subtitles className="w-3.5 h-3.5" />
                  <span>CC</span>
                </button>
              </div>
            </div>

            {/* Bottom Actions & Stepper */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              {/* Stepper Dots */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalSteps }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToStep(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentStepIndex
                        ? "w-6 bg-cloud-blue"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                    title={`Go to Step ${idx + 1}`}
                    aria-label={`Jump to step ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                {!isFirstStep && (
                  <button
                    onClick={prevStep}
                    className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" /> Back
                  </button>
                )}

                <button
                  onClick={nextStep}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-cloud-blue hover:bg-cloud-blue-hover transition-all flex items-center gap-1.5 shadow-md shadow-cloud-blue/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  {isLastStep ? "Finish Tour" : "Next Sub-Page"}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Synchronized Subtitles / Closed Captions (Bottom Bar) */}
        <AnimatePresence>
          {showCaptions && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10001] w-[90%] max-w-2xl bg-dark-navy/90 backdrop-blur-xl text-white px-5 py-3 rounded-2xl border border-blue-500/40 shadow-2xl flex items-center gap-3.5 text-center"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-900/60 border border-blue-600/40 text-sky-400 flex items-center justify-center flex-shrink-0">
                <Subtitles className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm font-medium leading-snug text-blue-100 flex-1">
                "{currentCaption}"
              </p>
              <button
                onClick={toggleCaptions}
                className="text-slate-400 hover:text-white p-1"
                title="Hide Captions"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}

// Floating Tour Launcher Badge
export function FloatingTourBadge() {
  const { isOpen, startTour } = useTour();

  if (isOpen) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => startTour(0)}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-cloud-blue to-dark-navy text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-xl shadow-cloud-blue/25 border border-sky-400/40 flex items-center gap-2 group cursor-pointer"
      title="Quick Interactive Platform Overview Tour"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      <Sparkles className="w-4 h-4 text-sky-300 group-hover:rotate-12 transition-transform" />
      <span>Platform Overview Tour</span>
    </motion.button>
  );
}
