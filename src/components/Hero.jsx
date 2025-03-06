import React, { useEffect } from "react";
import HeroBox from "./HeroBox";
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t, i18n } = useTranslation()
  return (
    <section className="text-center py-16 px-5 container mx-auto" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <h1 className="text-3xl md:text-4xl font-bold">
        {t('hero_section.title')}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
        {t('hero_section.description')}
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-primary-dark dark:bg-primary-light text-white px-4 sm:px-6 py-2 rounded-lg sm:text-lg font-medium hover:bg-green-700 transition">
          {t('get_started')}
        </button>
        <button className="bg-[#D1FAE5] text-primary-dark px-4 sm:px-6 py-2 rounded-lg sm:text-lg font-medium hover:bg-green-100 transition">
          {t('navbar.prayer_times')}
        </button>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {t('hero_section.cards', { returnObjects: true })
          .map((e, i) => <HeroBox key={i} head={e.title} body={e.description} btm={t(e.btm)} isArabic={i18n.language === 'ar'} />
          )}
      </div>
    </section>
  );
};

export default Hero;
