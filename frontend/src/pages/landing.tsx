import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from '@/utils/i18n/translations';
import Image from 'next/image';
import userIcon from '@/public/images/user-icon.png'; // Assuming you have a user icon image

const LandingPage = () => {
  const router = useRouter();
  const { t } = useTranslation(router.locale);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-4 right-4">
        <Image src={userIcon} alt="User Icon" width={40} height={40} />
      </div>
      <h1 className="text-2xl font-bold">
        {t('landing.thankYouMessage')}
      </h1>
      <p className="mt-4 text-center">
        Thank you for testing the veganeiro login feature. We will email you with the latest info when we have updates.
      </p>
    </div>
  );
};

export default LandingPage;
