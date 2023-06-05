import React from 'react'
import styles from './socialList.module.scss'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons' // 👈
import { SocialLinksType } from '@/app/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialList = ({ socialLinks }: { socialLinks: SocialLinksType }) => {
  const {twitter, linkedin, github} = socialLinks;

  return (
    <div className={styles['social-list']}>
      {twitter && <a href={twitter} target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>}
      {linkedin && <a href={linkedin} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>}
      {github && <a href={github} target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>}
    </div>
  );
}
