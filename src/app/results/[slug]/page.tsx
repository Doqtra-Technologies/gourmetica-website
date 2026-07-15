import { notFound } from "next/navigation";

import { CASE_STUDY_DETAILS } from "@/constants/results";
import No5CaseStudy from "./No5CaseStudy";
import OttoKitchenCaseStudy from "./OttoKitchenCaseStudy";
import FortyTwoHolbornCaseStudy from "./FortyTwoHolbornCaseStudy";
import LizzCaseStudy from "./LizzCaseStudy";
import MysaCaseStudy from "./MysaCaseStudy";
import PayizCaseStudy from "./PayizCaseStudy";
import RustiqCaseStudy from "./RustiqCaseStudy";
import LimanCaseStudy from "./LimanCaseStudy";
import SwissScentCaseStudy from "./SwissScentCaseStudy";
import LegacyStyleCaseStudy from "./LegacyStyleCaseStudy";

const LEGACY_STYLE_ACCENTS: Record<string, string> = {
  leonidas: "leonidas-clone",
  biitest: "biitest-clone",
  phoenix: "phoenix-clone",
  "great-british-doner": "gbd-clone"
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return [
    { slug: "no5" },
    { slug: "ottokitchen" },
    { slug: "42holborn" },
    { slug: "lizz" },
    { slug: "mysa" },
    { slug: "payiz" },
    { slug: "rustiq" },
    { slug: "liman" },
    { slug: "swiss-scent" },
    { slug: "leonidas" },
    { slug: "biitest" },
    { slug: "phoenix" },
    { slug: "great-british-doner" }
  ];
}

export default async function WorkDetail({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "no5") {
    return <No5CaseStudy />;
  }

  if (slug === "ottokitchen") {
    return <OttoKitchenCaseStudy />;
  }

  if (slug === "42holborn") {
    return <FortyTwoHolbornCaseStudy />;
  }

  if (slug === "lizz") {
    return <LizzCaseStudy />;
  }

  if (slug === "mysa") {
    return <MysaCaseStudy />;
  }

  if (slug === "payiz") {
    return <PayizCaseStudy />;
  }

  if (slug === "rustiq") {
    return <RustiqCaseStudy />;
  }

  if (slug === "liman") {
    return <LimanCaseStudy />;
  }

  if (slug === "swiss-scent") {
    return <SwissScentCaseStudy />;
  }

  const study = CASE_STUDY_DETAILS[slug];

  if (!study) {
    notFound();
  }

  return (
    <LegacyStyleCaseStudy
      study={study}
      accentClass={LEGACY_STYLE_ACCENTS[slug] ?? "leonidas-clone"}
      centeredGallery={slug === "great-british-doner"}
    />
  );
}
