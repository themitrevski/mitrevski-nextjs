import { ProfileType } from '@/app/types/types';
import Image from 'next/image';
import React from 'react'
import { SocialList } from '../socialList/socialList';
import styles from './Profile.module.scss';

export const Profile = ({ details }: { details: ProfileType }) => {
  const { gender, about, socialLinks } = details;
  const imageProfile = gender === 'male' ? '/images/toni.jpg' : '/images/radmila.jpg';
  
  return (
    <div className={styles.profile_section}>
        <Image
          className={styles.profile_section__image}
          src={imageProfile}
          width={120}
          height={111}
          alt="Profile image"
        />
        <div className={styles.profile_section__bio}>
        <p>{about}</p>
      </div>
      <SocialList socialLinks={socialLinks} />
    </div>
  )
}
