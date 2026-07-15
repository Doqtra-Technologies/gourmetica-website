import type { CaseStudyDetail } from "@/types/case-study";

function chunkPairs<T>(items: T[]): T[][] {
  const pairs: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }
  return pairs;
}

export default function LegacyStyleCaseStudy({
  study,
  accentClass,
  centeredGallery = false
}: {
  study: CaseStudyDetail;
  accentClass: string;
  /**
   * Render gallery pairs the way 42 Holborn does — each image at half the width of
   * its column and centred, rather than filling the column edge to edge.
   */
  centeredGallery?: boolean;
}) {
  const allServicesLackDescriptions =
    !!study.servicesDelivered?.length && study.servicesDelivered.every((s) => !s.description);

  return (
    <main className={accentClass}>
      <section
        className="case-clone-hero"
        style={{ backgroundImage: `url('${study.banner}')` }}
      >
        <h2>{study.title}</h2>
      </section>

      {study.scope.length > 0 && (
        <section className="case-clone-scope">
          <div className="case-clone-scope-pill">
            <h1>Scope</h1>
            <ul>
              {study.scope.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {study.websiteUrl && (
        <section className="case-clone-row" style={{ marginTop: "30px", marginBottom: "0" }}>
          <div />
          <div className="case-clone-row-content">
            <a
              href={study.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "0 14px", display: "inline-block", fontWeight: 700 }}
            >
              Visit Website &rarr;
            </a>
          </div>
        </section>
      )}

      <section className="case-clone-row" style={{ marginTop: "50px" }}>
        <div className="case-clone-row-label">
          <h3>Client Overview</h3>
        </div>
        <div className="case-clone-row-content">
          {study.overview.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {study.challenge && (
        <section className="case-clone-row">
          <div className="case-clone-row-label">
            <h3>Challenges</h3>
          </div>
          <div className="case-clone-row-content">
            {study.challenge.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {study.solution && (
        <section className="case-clone-row" style={{ marginBottom: "50px" }}>
          <div className="case-clone-row-label">
            <h3>Solution</h3>
          </div>
          <div className="case-clone-row-content">
            {study.solution.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {study.stats.length > 0 && (
        <section className="case-clone-stats-bar">
          {study.stats.map((stat, idx) => (
            <h3 key={idx}><span>{stat.val} {stat.label}</span></h3>
          ))}
        </section>
      )}

      {chunkPairs(study.gallery).map((pair, idx) =>
        pair.length === 2 ? (
          <div
            className={
              centeredGallery
                ? "case-clone-image-pair case-clone-image-pair--centered"
                : "case-clone-image-pair"
            }
            key={idx}
          >
            <div>
              <img src={pair[0]} alt="" style={centeredGallery ? { width: "50%" } : undefined} />
            </div>
            <div>
              <img src={pair[1]} alt="" style={centeredGallery ? { width: "50%" } : undefined} />
            </div>
          </div>
        ) : (
          <div className="case-clone-image-block" key={idx}>
            <img src={pair[0]} alt="" />
          </div>
        )
      )}

      {study.servicesDelivered && study.servicesDelivered.length > 0 && (
        allServicesLackDescriptions ? (
          <section className="case-clone-row" style={{ marginTop: "50px", marginBottom: "50px" }}>
            <div className="case-clone-row-label">
              <h3>Services Delivered</h3>
            </div>
            <div className="case-clone-row-content">
              <ul className="case-clone-results-list">
                {study.servicesDelivered.map((service, idx) => (
                  <li key={idx}>{service.title}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : (
          <>
            {study.servicesDelivered.map((service, idx) => (
              <section
                className="case-clone-row"
                key={idx}
                style={
                  idx === study.servicesDelivered!.length - 1
                    ? { marginTop: idx === 0 ? "50px" : undefined, marginBottom: "50px" }
                    : idx === 0
                      ? { marginTop: "50px" }
                      : undefined
                }
              >
                <div className="case-clone-row-label">
                  <h3>{service.title}</h3>
                </div>
                <div className="case-clone-row-content">
                  {service.description && <p>{service.description}</p>}
                </div>
              </section>
            ))}
          </>
        )
      )}
    </main>
  );
}
