import { useLanguage } from "@/contexts/LanguageContext";
import { FadeInSection } from "@/hooks/useFadeIn";
import placeholderImg from "@/assets/happening-now-placeholder.jpg";

export interface HappeningNowData {
  visible: boolean;
  eventName: string;
  date: string;
  time: string;
  description: string;
  entryType: "free" | "paid";
  imageUrl?: string;
}

const defaultData: HappeningNowData = {
  visible: true,
  eventName: "",
  date: "",
  time: "",
  description: "",
  entryType: "free",
};

export default function HappeningNow({ data }: { data?: HappeningNowData }) {
  const { t } = useLanguage();
  const d = data ?? defaultData;

  if (!d.visible) return null;

  const name = d.eventName || t("happeningNow.defaultName");
  const date = d.date || t("happeningNow.defaultDate");
  const time = d.time || t("happeningNow.defaultTime");
  const desc = d.description || t("happeningNow.defaultDesc");
  const entryLabel =
    d.entryType === "free"
      ? t("happeningNow.freeEntry")
      : t("happeningNow.paidEntry");

  return (
    <FadeInSection>
      <section style={{ backgroundColor: "#141414" }} className="py-[60px] px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden">
            {/* Image */}
            <div className="h-[480px] w-full overflow-hidden">
              <img
                src={d.imageUrl || placeholderImg}
                alt={name}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 25%" }}
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span
                className="font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#E8321A" }}
              >
                {t("happeningNow.label")}
              </span>

              <h2 className="font-display text-[40px] lg:text-[64px] leading-none text-white mb-4">
                {name}
              </h2>

              <p
                className="font-body text-lg mb-1"
                style={{ color: "#D4873A" }}
              >
                {date}
              </p>

              <p className="font-body text-sm text-white/60 mb-4">{time}</p>

              <p className="font-body text-base text-white/80 mb-6 line-clamp-3 max-w-lg">
                {desc}
              </p>

              <span
                className={`inline-block self-start px-4 py-1.5 rounded-full text-sm font-semibold font-body ${
                  d.entryType === "free"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-red-600/20 text-red-400"
                }`}
              >
                {entryLabel}
              </span>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
