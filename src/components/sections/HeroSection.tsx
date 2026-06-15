"use client";

import Image from "next/image";
import { useState } from "react";
import { Braces, FileSearch, GitBranch, Mail, PanelsTopLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Badge } from "@/components/ui/Badge";
import { heroSignals, profile } from "@/data/portfolio";

const ctaIcons = [PanelsTopLeft];
const signalIcons = [GitBranch, FileSearch, Braces];

export function HeroSection() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const emailLabel = isEmailVisible ? profile.email : "이메일";

  return (
    <section className="hero" id="top">
      <Image
        src="/images/portfolio-workspace.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero__image"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero-portrait-bg" aria-hidden="true">
        <Image
          src="/images/profile/joinseong-profile-hero.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 760px) 320px, 520px"
          className="hero-portrait-bg__image"
        />
      </div>
      <div className="hero__content">
        <div className="hero__copy">
          <Badge tone="warning">{profile.sourceStatus}</Badge>
          <p className="hero__role">{profile.role}</p>
          <h1>{profile.headline}</h1>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__actions" aria-label="주요 이동">
            {profile.ctas.map((cta, index) => (
              <ButtonLink
                key={cta.href}
                href={cta.href}
                icon={ctaIcons[index]}
                variant={index === 0 ? "primary" : "secondary"}
              >
                {cta.label}
              </ButtonLink>
            ))}
            <button
              type="button"
              className="button-link button-link--secondary"
              aria-label={isEmailVisible ? `이메일 주소 ${profile.email}` : "이메일 주소 보기"}
              onClick={() => setIsEmailVisible(true)}
            >
              <Mail aria-hidden="true" size={18} />
              <span aria-live="polite">{emailLabel}</span>
            </button>
          </div>
        </div>
        <div className="hero-dossier" aria-label="핵심 정보">
          <div className="hero-dossier__signals">
            {heroSignals.map((signal, index) => {
              const Icon = signalIcons[index];

              return (
                <div key={signal.label}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                  <p>{signal.caption}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
