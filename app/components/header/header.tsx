'use client';
import Link from 'next/link';
import React, { useState } from "react";
import { Profile } from '../profile/profile';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { Profiles } from '@/app/utils/profilesData';

export const Header = () => {
  const [headerVisibility, setHeaderVisibility] = useState(false);
  const iconClass = headerVisibility ? faTimes : faBars;
  const headerClass = headerVisibility ? `${styles.header__cont} ${styles.active}` : styles.header__cont;
  const firstProfile = Profiles.toni
  const secondProfile = Profiles.radmila

  return (
    <div className={styles.header}>
      <span className={styles.header__hamb} onClick={e => setHeaderVisibility(!headerVisibility)}>
        <FontAwesomeIcon icon={iconClass} />
      </span>
      <h1 className={styles.header__blog_name}>
        <Link href='/'>
          <span>Mitrevski&lsquo;s Blog</span>
        </Link>
      </h1>
      <div className={headerClass}>
        <Profile details={firstProfile} />
        <Profile details={secondProfile} />
      </div>
  </div>
  )
}
