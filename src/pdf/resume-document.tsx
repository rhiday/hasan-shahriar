import React from "react";
import { createRequire } from "module";
import { renderToStaticMarkup } from "react-dom/server";
import {
  Circle,
  Document,
  Font,
  Image,
  Page,
  Path,
  Rect,
  StyleSheet,
  Svg,
  Text,
  View,
  type Style,
} from "@react-pdf/renderer";
import { RESUME_DATA } from "@/data/resume-data";
import type { IconType } from "@/lib/types";

const require = createRequire(import.meta.url);
const inter400 = require.resolve(
  "@fontsource/inter/files/inter-latin-400-normal.woff"
);
const inter500 = require.resolve(
  "@fontsource/inter/files/inter-latin-500-normal.woff"
);
const inter600 = require.resolve(
  "@fontsource/inter/files/inter-latin-600-normal.woff"
);
const inter700 = require.resolve(
  "@fontsource/inter/files/inter-latin-700-normal.woff"
);

const jetBrains400 = require.resolve(
  "@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff"
);
const jetBrains600 = require.resolve(
  "@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff"
);

Font.register({
  family: "Inter",
  fonts: [
    {
      src: inter400,
      fontWeight: "normal",
    },
    {
      src: inter500,
      fontWeight: 500,
    },
    {
      src: inter600,
      fontWeight: 600,
    },
    {
      src: inter700,
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "JetBrains Mono",
  fonts: [
    {
      src: jetBrains400,
      fontWeight: "normal",
    },
    {
      src: jetBrains600,
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 36,
    fontFamily: "Inter",
    fontSize: 15,
    lineHeight: 1.55,
    color: "#0f172a",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: 500,
    color: "#1f2937",
    marginBottom: 10,
  },
  contactRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  contactButtonRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  contactButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "1 solid #e5e7eb",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontFamily: "JetBrains Mono",
    fontSize: 12,
    color: "#0f172a",
    textDecoration: "none",
    backgroundColor: "#f8fafc",
    marginRight: 8,
    marginBottom: 8,
  },
  contactButtonIcon: {
    width: 14,
    height: 14,
  },
  contactButtonLabel: {
    fontFamily: "JetBrains Mono",
    fontSize: 12,
    color: "#0f172a",
    marginLeft: 6,
  },
  inlineRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    marginBottom: 4,
  },
  inlineIcon: {
    width: 14,
    height: 14,
  },
  inlineText: {
    fontFamily: "JetBrains Mono",
    fontSize: 13,
    color: "#1f2937",
    marginLeft: 6,
  },
  avatarWrapper: {
    width: 90,
    height: 90,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#e5e7eb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarFallback: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2933",
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 13,
    fontFamily: "JetBrains Mono",
    lineHeight: 1.4,
    color: "#1f2937",
  },
  workItem: {
    marginBottom: 16,
  },
  workHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 4,
  },
  workCompany: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
  },
  workTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: "#0f172a",
    marginBottom: 6,
    fontFamily: "JetBrains Mono",
  },
  workPeriod: {
    fontSize: 13,
    fontFamily: "JetBrains Mono",
    color: "#475569",
  },
  badgeRow: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 6,
    marginBottom: 6,
  },
  badge: {
    backgroundColor: "#f3f4f6",
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: "JetBrains Mono",
    color: "#0f172a",
  },
  bulletList: {
    marginLeft: 12,
    marginTop: 6,
  },
  bulletItem: {
    fontSize: 14,
    fontFamily: "JetBrains Mono",
    lineHeight: 1.5,
    marginBottom: 4,
    color: "#1f2937",
  },
  educationItem: {
    marginBottom: 12,
  },
  educationSchool: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  educationDegree: {
    fontSize: 14,
    fontFamily: "JetBrains Mono",
    color: "#1f2937",
  },
  educationPeriod: {
    fontSize: 13,
    fontFamily: "JetBrains Mono",
    color: "#475569",
  },
  skillsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skillBadge: {
    backgroundColor: "#f3f4f6",
    borderRadius: 999,
    paddingVertical: 3,
    paddingHorizontal: 7,
    fontSize: 11,
    fontFamily: "JetBrains Mono",
    color: "#0f172a",
  },
  projectRow: {
    marginBottom: 10,
  },
  projectTitleRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  projectLink: {
    fontSize: 13,
    fontFamily: "JetBrains Mono",
    color: "#334155",
  },
  projectDescription: {
    fontSize: 14,
    fontFamily: "JetBrains Mono",
    color: "#1f2937",
    marginTop: 4,
  },
});

const ICON_COLOR = "#0f172a";
const ICON_STROKE_PROPS = {
  stroke: ICON_COLOR,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

function IconGraphic({
  type,
  size = 14,
  style,
}: {
  type: IconType;
  size?: number;
  style?: Style;
}) {
  switch (type) {
    case "globe":
      return (
        <Svg style={style} width={size} height={size} viewBox="0 0 24 24">
          <Circle cx="12" cy="12" r="10" {...ICON_STROKE_PROPS} />
          <Path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" {...ICON_STROKE_PROPS} />
          <Path d="M2 12h20" {...ICON_STROKE_PROPS} />
        </Svg>
      );
    case "mail":
      return (
        <Svg style={style} width={size} height={size} viewBox="0 0 24 24">
          <Rect width="20" height="16" x="2" y="4" rx="2" {...ICON_STROKE_PROPS} />
          <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" {...ICON_STROKE_PROPS} />
        </Svg>
      );
    case "phone":
      return (
        <Svg style={style} width={size} height={size} viewBox="0 0 24 24">
          <Path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            {...ICON_STROKE_PROPS}
          />
        </Svg>
      );
    case "github":
      return (
        <Svg style={style} width={size} height={size} viewBox="0 0 24 24">
          <Path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            {...ICON_STROKE_PROPS}
          />
          <Path d="M9 18c-4.51 2-5-2-7-2" {...ICON_STROKE_PROPS} />
        </Svg>
      );
    case "linkedin":
      return (
        <Svg style={style} width={size} height={size} viewBox="0 0 24 24">
          <Path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            {...ICON_STROKE_PROPS}
          />
          <Rect width="4" height="12" x="2" y="9" {...ICON_STROKE_PROPS} />
          <Circle cx="4" cy="4" r="2" {...ICON_STROKE_PROPS} />
        </Svg>
      );
    default:
      return null;
  }
}

function decodeHtmlEntities(text: string) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function extractIntroAndBullets(
  content: string | React.ReactNode
): { intro: string | null; bullets: string[] } {
  if (typeof content === "string") {
    return { intro: content, bullets: [] };
  }

  const html = renderToStaticMarkup(<>{content}</>);
  const bulletMatches = Array.from(
    html.matchAll(/<li[^>]*>(.*?)<\/li>/g)
  ).map(([, inner]) => decodeHtmlEntities(inner.replace(/<[^>]+>/g, "")).trim());

  const introHtml = html.replace(/<ul[^>]*>.*<\/ul>/s, "");
  const intro = decodeHtmlEntities(introHtml.replace(/<[^>]+>/g, "")).trim();

  return {
    intro: intro.length > 0 ? intro : null,
    bullets: bulletMatches,
  };
}

function renderContactButtons() {
  const buttons: Array<{ label: string; icon: IconType; key: string }> = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    buttons.push({
      label: "Website",
      icon: "globe",
      key: RESUME_DATA.personalWebsiteUrl,
    });
  }
  if (RESUME_DATA.contact.email) {
    buttons.push({
      label: "Email",
      icon: "mail",
      key: RESUME_DATA.contact.email,
    });
  }
  if (RESUME_DATA.contact.tel) {
    buttons.push({
      label: "Phone",
      icon: "phone",
      key: RESUME_DATA.contact.tel,
    });
  }
  RESUME_DATA.contact.social.forEach((social) => {
    buttons.push({
      label: social.name,
      icon: social.icon,
      key: social.url,
    });
  });

  return buttons.map((button) => (
    <View key={button.key} style={styles.contactButton}>
      <IconGraphic type={button.icon} size={13} style={styles.contactButtonIcon} />
      <Text style={styles.contactButtonLabel}>{button.label}</Text>
    </View>
  ));
}

function formatDateRange(start: string, end: string | null) {
  return `${start} - ${end ?? "Present"}`;
}

interface ResumeDocumentProps {
  avatarPath?: string | null;
}

export function ResumeDocument({ avatarPath }: ResumeDocumentProps) {
  const summary = extractIntroAndBullets(RESUME_DATA.summary);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.name}>{RESUME_DATA.name}</Text>
            <Text style={styles.title}>{RESUME_DATA.about}</Text>
            <View style={styles.inlineRow}>
              <IconGraphic
                type="globe"
                size={14}
                style={styles.inlineIcon}
              />
              <Text style={styles.inlineText}>{RESUME_DATA.location}</Text>
            </View>
            <View style={styles.contactRow}>
              {RESUME_DATA.contact.email && (
                <View style={styles.inlineRow}>
                  <IconGraphic
                    type="mail"
                    size={14}
                    style={styles.inlineIcon}
                  />
                  <Text style={styles.inlineText}>
                    {RESUME_DATA.contact.email}
                  </Text>
                </View>
              )}
              {RESUME_DATA.contact.tel && (
                <View style={styles.inlineRow}>
                  <IconGraphic
                    type="phone"
                    size={14}
                    style={styles.inlineIcon}
                  />
                  <Text style={styles.inlineText}>
                    {RESUME_DATA.contact.tel}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.contactButtonRow}>{renderContactButtons()}</View>
          </View>

          <View style={styles.avatarWrapper}>
            {avatarPath ? (
              <Image src={avatarPath} style={{ width: "100%", height: "100%" }} />
            ) : (
              <Text style={styles.avatarFallback}>{RESUME_DATA.initials}</Text>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          {summary.intro && (
            <Text style={styles.paragraph}>{summary.intro}</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {RESUME_DATA.work.map((job) => {
            const { intro, bullets } = extractIntroAndBullets(job.description);
            return (
              <View key={`${job.company}-${job.start}`} style={styles.workItem}>
                <View style={styles.workHeader}>
                  <View>
                    <Text style={styles.workCompany}>{job.company}</Text>
                    <Text style={styles.workTitle}>{job.title}</Text>
                  </View>
                  <Text style={styles.workPeriod}>
                    {formatDateRange(job.start, job.end)}
                  </Text>
                </View>
                {job.badges.length > 0 && (
                  <View style={styles.badgeRow}>
                    {job.badges.map((badge) => (
                      <View key={badge} style={styles.badge}>
                        <Text>{badge}</Text>
                      </View>
                    ))}
                  </View>
                )}
                {intro && <Text style={styles.paragraph}>{intro}</Text>}
                {bullets.length > 0 && (
                  <View style={styles.bulletList}>
                    {bullets.map((bullet) => (
                      <Text key={bullet} style={styles.bulletItem}>
                        • {bullet}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {RESUME_DATA.education.map((entry) => (
            <View key={`${entry.school}-${entry.start}`} style={styles.educationItem}>
              <View style={styles.workHeader}>
                <Text style={styles.educationSchool}>{entry.school}</Text>
                <Text style={styles.educationPeriod}>
                  {formatDateRange(entry.start, entry.end)}
                </Text>
              </View>
              <Text style={styles.educationDegree}>{entry.degree}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsWrapper}>
            {RESUME_DATA.skills.map((skill) => (
              <View key={skill} style={styles.skillBadge}>
                <Text>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Side projects</Text>
          {RESUME_DATA.projects.map((project) => (
            <View key={project.title} style={styles.projectRow}>
              <View style={styles.projectTitleRow}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                {project.link && <Text style={styles.projectLink}>[{project.link.label}]</Text>}
              </View>
              <Text style={styles.projectDescription}>{project.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
