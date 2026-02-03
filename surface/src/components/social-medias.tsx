"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type SocialMedia = "twitter" | "linkedin" | "instagram";

export const SocialMedias = () => {
  const [hoveredSocialMedia, setHoveredSocialMedia] =
    useState<SocialMedia | null>(null);

  const tooltipLabel = useMemo(() => {
    const activeTheme = hoveredSocialMedia ?? "twitter";

    switch (activeTheme) {
      case "twitter":
        return "Follow us on Twitter";
      case "linkedin":
        return "Follow us on LinkedIn";
      case "instagram":
        return "Follow us on Instagram";
      default:
        return "Follow us";
    }
  }, [hoveredSocialMedia]);

  return (
    <div className="flex w-fit flex-col items-end">
      <div className="-mr-2 mb-2 flex">
        <Button
          asChild
          size="icon"
          variant="ghost"
          aria-label="Follow us on Twitter"
          aria-pressed={hoveredSocialMedia === "twitter"}
          className={cn(hoveredSocialMedia === "twitter" && "text-foreground")}
          onMouseEnter={() => setHoveredSocialMedia("twitter")}
          onMouseLeave={() => setHoveredSocialMedia(null)}
          onFocus={() => setHoveredSocialMedia("twitter")}
          onBlur={() => setHoveredSocialMedia(null)}
        >
          <Link
            href="https://x.com/KUNAL_BHALERAO_"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
          >
            <Twitter />
          </Link>
        </Button>
        <Button
          asChild
          size="icon"
          variant="ghost"
          aria-label="Follow us on LinkedIn"
          aria-pressed={hoveredSocialMedia === "linkedin"}
          className={cn(hoveredSocialMedia === "linkedin" && "text-foreground")}
          onMouseEnter={() => setHoveredSocialMedia("linkedin")}
          onMouseLeave={() => setHoveredSocialMedia(null)}
          onFocus={() => setHoveredSocialMedia("linkedin")}
          onBlur={() => setHoveredSocialMedia(null)}
        >
          <Link
            href="https://www.linkedin.com/in/kunalbhalerao"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
          >
            <Linkedin />
          </Link>
        </Button>

        <Button
          asChild
          size="icon"
          variant="ghost"
          aria-label="Follow us on Instagram"
          aria-pressed={hoveredSocialMedia === "instagram"}
          className={cn(
            hoveredSocialMedia === "instagram" && "text-foreground",
          )}
          onMouseEnter={() => setHoveredSocialMedia("instagram")}
          onMouseLeave={() => setHoveredSocialMedia(null)}
          onFocus={() => setHoveredSocialMedia("instagram")}
          onBlur={() => setHoveredSocialMedia(null)}
        >
          <Link
            href="https://www.instagram.com/kunalbhaleraoo"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
          >
            <Instagram />
          </Link>
        </Button>
      </div>

      <div
        aria-live="polite"
        className={cn(
          "text-muted-foreground w-fit text-xs leading-none transition-opacity",
          hoveredSocialMedia ? "opacity-100" : "opacity-0",
        )}
      >
        {tooltipLabel}
      </div>
    </div>
  );
};
