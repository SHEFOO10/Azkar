import { useTranslation } from "react-i18next";
import PrayerGuideContainer from "./PrayerGuideContainer";
import PrayerGuideSection from "./PrayerGuideSection";
import PrayerItem from "./PrayerItem";


export default function PrayerGuide() {
  const { t, i18n } = useTranslation()
  const content = t('prayer_guides', { returnObjects: true })
  const isArabic = i18n.language === 'ar'
  return (
    <section id='prayer-guide' dir={isArabic ? 'rtl' : 'ltr'}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        {content.title}
      </h2>
      <PrayerGuideContainer>
        {content.guides.map(
          (e, i) =>
            <PrayerGuideSection key={i} title={e.title} about={e.about === '' && e.about}>
              {e.steps && e.steps.map(
                (a, j) => !a ? undefined : typeof a === 'string'
                  ? <PrayerItem key={j}>{a}</PrayerItem>
                  : <PrayerItem key={j} step={a} />
              )}
            </PrayerGuideSection>
        )}
      </PrayerGuideContainer>
    </section>
  )
}
