"use client";

// Web Audio API Sound Synthesizer for modern harmonic UI cues
class SoundSynthesizer {
  private ctx: AudioContext | null = null;

  private getAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  play(type: "step" | "complete" | "open" | "click") {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      if (type === "step") {
        // Soft dual-tone futuristic chord
        const freqs = [659.25, 987.77];
        freqs.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + i * 0.08);

          gain.gain.setValueAtTime(0, now + i * 0.08);
          gain.gain.linearRampToValueAtTime(0.06, now + i * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.4);
        });
      } else if (type === "complete") {
        // Celebratory harmonic triad
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + i * 0.1);

          gain.gain.setValueAtTime(0, now + i * 0.1);
          gain.gain.linearRampToValueAtTime(0.08, now + i * 0.1 + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.6);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + i * 0.1);
          osc.stop(now + i * 0.1 + 0.65);
        });
      } else if (type === "open") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.05, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === "click") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(800, now);

        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.06);
      }
    } catch {}
  }
}

export const soundFx = new SoundSynthesizer();

// HTML5 Pre-rendered Audio Player Controller
class TourAudioPlayer {
  private currentAudio: HTMLAudioElement | null = null;
  private currentSrc: string | null = null;

  playFile(
    src: string,
    options: {
      rate?: number;
      volume?: number;
      onStart?: () => void;
      onEnded?: () => void;
      onTimeUpdate?: (currentTime: number, duration: number) => void;
      onError?: (err: unknown) => void;
    } = {}
  ): void {
    if (typeof window === "undefined") return;

    this.stop();

    const audio = new Audio(src);
    this.currentAudio = audio;
    this.currentSrc = src;

    audio.playbackRate = options.rate ?? 1.0;
    audio.volume = options.volume ?? 1.0;

    audio.onplay = () => {
      if (options.onStart) options.onStart();
    };

    audio.onended = () => {
      this.currentAudio = null;
      if (options.onEnded) options.onEnded();
    };

    audio.ontimeupdate = () => {
      if (options.onTimeUpdate) {
        options.onTimeUpdate(audio.currentTime, audio.duration || 1);
      }
    };

    audio.onerror = (e) => {
      if (options.onError) options.onError(e);
      if (options.onEnded) options.onEnded();
    };

    audio.play().catch((err) => {
      // Autoplay policy fallback
      if (options.onError) options.onError(err);
    });
  }

  pause(): void {
    if (this.currentAudio && !this.currentAudio.paused) {
      this.currentAudio.pause();
    }
  }

  resume(): void {
    if (this.currentAudio && this.currentAudio.paused) {
      this.currentAudio.play().catch(() => {});
    }
  }

  stop(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
      this.currentSrc = null;
    }
  }

  setRate(rate: number): void {
    if (this.currentAudio) {
      this.currentAudio.playbackRate = rate;
    }
  }

  setVolume(vol: number): void {
    if (this.currentAudio) {
      this.currentAudio.volume = Math.max(0, Math.min(1, vol));
    }
  }

  isPlaying(): boolean {
    return !!(this.currentAudio && !this.currentAudio.paused && !this.currentAudio.ended);
  }
}

export const tourAudioPlayer = new TourAudioPlayer();
