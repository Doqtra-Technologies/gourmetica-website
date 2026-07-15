"use client";

import { useState } from "react";
import Link from "next/link";
import { CLIENTS } from "@/constants/clients";
import { Box, Grid, Flex } from "@/core/primitives";
import { Reveal, Stagger } from "@/core/motion";
import { ClientLogoChip } from "@/core/components/ClientLogoChip";

/* Client requirement: showcase the first 25–30 logos, with a "View All
   Clients" control revealing the remaining roster. */
const INITIAL_COUNT = 28;

export default function ClientsShowcase() {
  const [showAll, setShowAll] = useState(false);
  const visibleClients = showAll ? CLIENTS : CLIENTS.slice(0, INITIAL_COUNT);
  const hiddenCount = CLIENTS.length - INITIAL_COUNT;

  return (
    <Box className="w-full bg-black py-8">
      {/* Giant Title Header */}
      <Box className="w-full text-left mb-16" style={{ marginBottom: "4rem", marginTop: "2rem" }}>
        <Reveal>
          <h1
            className="font-mont font-black uppercase text-white leading-none tracking-tighter text-[72px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Clients
          </h1>
        </Reveal>
      </Box>

      {/* Grid Showcase */}
      <Stagger>
        <Grid columns={2} gap="sm" className="md:grid-cols-3 lg:grid-cols-4" style={{ gap: "20px" }}>
          {visibleClients.map((client, index) => {
            const hasUrl = Boolean(client.url && client.url !== "#");
            const CardTag = hasUrl ? "a" : "div";
            return (
              <Reveal key={client.name} delay={(index % 8) * 0.03}>
                <CardTag
                  href={hasUrl ? client.url : undefined}
                  target={hasUrl ? "_blank" : undefined}
                  rel={hasUrl ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col justify-between items-center aspect-[4/3] bg-[#161618] p-5 transition-all duration-300 hover:bg-[#1c1c1f] hover:scale-[1.03] relative overflow-hidden rounded-xl ${hasUrl ? "cursor-pointer" : "cursor-default"}`}
                >
                  {/* Logo chip — tone-aware surface (white for dark artwork, dark
                      for white artwork) so any file reads. Clients without a
                      supplied logo yet get a name-only tile. */}
                  {client.logo ? (
                    <ClientLogoChip
                      logo={client.logo}
                      name={client.name}
                      className="flex-1 w-full min-h-0 mb-4 rounded-lg p-4"
                      imgClassName="group-hover:scale-105"
                    />
                  ) : (
                    <Flex align="center" justify="center" className="flex-1 w-full min-h-0 mb-4 rounded-lg border border-white/10">
                      <span className="font-heading font-bold text-lg uppercase tracking-wider text-white/40 text-center px-2 transition-all duration-300 group-hover:text-white/60">
                        {client.name}
                      </span>
                    </Flex>
                  )}

                  {/* Bottom row: name, swapping to "Visit Website" only when a URL exists */}
                  <Flex align="center" justify="center" className="border-t border-neutral-900/40 w-full pt-3 relative h-5 shrink-0">
                    <span
                      className={`font-heading font-bold text-xs uppercase tracking-wider text-neutral-400 transition-all duration-300 ${hasUrl ? "group-hover:opacity-0 group-hover:-translate-y-1" : ""}`}
                    >
                      {client.name}
                    </span>
                    {hasUrl && (
                      <span
                        className="absolute font-heading font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-1"
                        style={{ color: "#E42528" }}
                      >
                        Visit Website ↗
                      </span>
                    )}
                  </Flex>
                </CardTag>
              </Reveal>
            );
          })}
        </Grid>
      </Stagger>

      {/* View All Clients — reveals the remaining roster */}
      {!showAll && hiddenCount > 0 && (
        <Flex justify="center" className="mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="font-heading font-bold text-[12px] uppercase tracking-[0.05em] text-white bg-primary hover:bg-[#bd1a1d] transition-colors duration-200 px-8 pt-[15px] pb-[13px] min-h-[44px] cursor-pointer border-none"
          >
            View All Clients ({hiddenCount} more)
          </button>
        </Flex>
      )}

      {/* Oversized closing CTA — echoes the giant title treatment */}
      <Reveal className="mt-24 pt-16 border-t border-neutral-900/60" style={{ marginTop: "6rem", paddingTop: "3rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <Link href="/getintouch" className="group block w-full text-left">
          <h2
            className="font-mont font-black uppercase text-white leading-none tracking-tighter text-[48px] sm:text-[72px] md:text-[100px] lg:text-[130px] transition-colors duration-300 group-hover:text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book A Call
          </h2>
        </Link>
      </Reveal>
    </Box>
  );
}
